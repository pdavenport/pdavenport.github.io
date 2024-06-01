"use client";
import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// const CONFIG = {
//   size: 120,
//   trigger: false,
//   bar: true,
//   range: 120,
//   light: false,
// };

export const TextScroller = ({ children }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const update = () => {
      ScrollTrigger.refresh();
      document.documentElement.dataset.light = false;
      document.documentElement.dataset.trigger = false;
      document.documentElement.dataset.maskBar = true;
      document.documentElement.style.setProperty("--mask-size", 180);
      document.documentElement.style.setProperty("--mask-range", 120);
    };
    update();

    let triggers = [];
    let obs;
    const scroller = scrollerRef.current;

    const createScrollTrigger = (start, end, property) => {
      const trigger = ScrollTrigger.create({
        scroller,
        trigger: "article",
        scrub: true,
        ease: "none",
        start,
        end,
        onUpdate: (self) => {
          scroller.style.setProperty(property, self.progress * 100);
        },
      });
      triggers.push(trigger);
    };

    if (!CSS.supports("animation-timeline: scroll()")) {
      gsap.registerPlugin(ScrollTrigger);
      const scroller = scrollerRef.current;

      createScrollTrigger(0, () => 120, "--scroll-progress-top");
      createScrollTrigger(
        () => ScrollTrigger.maxScroll(scroller) - 120 * 1,
        () => ScrollTrigger.maxScroll(scroller),
        "--scroll-progress-bottom"
      );

      obs = new ResizeObserver(ScrollTrigger.refresh);
      obs.observe(scroller);
    }

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      if (obs) {
        obs.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <div className="resizer">
        <section className="scroller" ref={scrollerRef}>
          <article>{children}</article>
        </section>
      </div>
      <style jsx>{`
        @layer scroller {
          .resizer {
            --bg: color-mix(in lch, canvas, canvasText 2%);
            width: 36ch;
            aspect-ratio: 3 / 4;
            resize: both;
            overflow: hidden;
            min-width: 260px;
            min-height: 320px;
            max-height: calc(100vh - 4rem);
            max-width: calc(100vw - 4rem);
            background: linear-gradient(var(--bg), var(--bg)) padding-box,
              linear-gradient(
                  color-mix(in lch, canvasText, transparent 70%),
                  color-mix(in lch, canvasText, transparent 90%)
                )
                border-box;
            border-radius: 12px;
            border: 1px solid transparent;
            padding: 0.25rem;
          }
          .scroller {
            width: 100%;
            height: 100%;
            overflow: auto;
            position: relative;
            overflow-x: hidden;
            padding: 0.75rem;
            scrollbar-width: thin;
            scrollbar-color: var(--accent) transparent;
          }
          article {
            display: flex;
            gap: 1rem;
            flex-direction: column;
          }
        }

        @layer mask {
          .scroller {
            --mask-width: 100%;
            mask: linear-gradient(#000, #0000) 0 0 / var(--mask-width)
                calc(
                  (var(--scroll-progress-top, 0) / 100) *
                    (var(--mask-size) * 1px)
                )
                no-repeat,
              linear-gradient(#000, #000) 0 50% / 100% 100% no-repeat,
              linear-gradient(#0000, #000) 0 100% / var(--mask-width)
                calc(
                  ((100 - var(--scroll-progress-bottom, 100)) / 100) *
                    (var(--mask-size) * 1px)
                )
                no-repeat;
            mask-composite: exclude;
          }
          [data-mask-bar="false"] .scroller {
            --mask-width: calc(100% - 10px);
          }
          [data-trigger="true"] .scroller {
            transition: mask-size 0.25s
              linear(
                0 0%,
                0.0027 3.64%,
                0.0106 7.29%,
                0.0425 14.58%,
                0.0957 21.87%,
                0.1701 29.16%,
                0.2477 35.19%,
                0.3401 41.23%,
                0.5982 55.18%,
                0.7044 61.56%,
                0.7987 68.28%,
                0.875 75%,
                0.9297 81.25%,
                0.9687 87.5%,
                0.9922 93.75%,
                1 100%
              );
          }
          @supports (animation-timeline: scroll()) {
            .scroller {
              scroll-timeline: --scroller;
              mask: linear-gradient(white, transparent) 0 0 / var(--mask-width)
                  0 no-repeat,
                linear-gradient(white, white) 0 50% / 100% 100% no-repeat,
                linear-gradient(transparent, white) 0 100% / var(--mask-width)
                  calc(var(--mask-size) * 1px) no-repeat;
              mask-composite: exclude;
              mask-repeat: none;
              animation: mask-up both linear, mask-down both linear;
              animation-timeline: scroll(self);
              animation-range: 0 calc(var(--mask-range) * 1px),
                calc(100% - (var(--mask-range) * 1px)) 100%;
            }
            @keyframes mask-up {
              100% {
                mask-size: var(--mask-width) calc(var(--mask-size) * 1px),
                  100% 100%, var(--mask-width) calc(var(--mask-size) * 1px);
              }
            }
            @keyframes mask-down {
              100% {
                mask-size: var(--mask-width) calc(var(--mask-size) * 1px),
                  100% 100%, var(--mask-width) 0;
              }
            }

            @property --trigger-up {
              initial-value: 0;
              inherits: true;
              syntax: "<integer>";
            }
            @property --trigger-down {
              initial-value: 1;
              inherits: true;
              syntax: "<integer>";
            }

            [data-trigger="true"] {
              timeline-scope: --scroller;
            }

            [data-trigger="true"] .resizer {
              animation: trigger-up both linear, trigger-down both linear;
              animation-timeline: --scroller;
              animation-range: 0 calc(var(--mask-range) * 1px),
                calc(100% - (var(--mask-range) * 1px)) 100%;
            }

            [data-trigger="true"] .scroller {
              animation: none;
              mask: linear-gradient(white, transparent) 0 0 / var(--mask-width)
                  calc(var(--trigger-up, 0) * (var(--mask-size) * 1px))
                  no-repeat,
                linear-gradient(white, white) 0 50% / 100% 100% no-repeat,
                linear-gradient(transparent, white) 0 100% / var(--mask-width)
                  calc(var(--trigger-down, 0) * (var(--mask-size) * 1px))
                  no-repeat;
              mask-composite: exclude;
              mask-repeat: none;
            }

            @keyframes trigger-up {
              100% {
                --trigger-up: 1;
              }
            }
            @keyframes trigger-down {
              100% {
                --trigger-down: 0;
              }
            }
          }
        }

        @layer transition {
          @property --column-one {
            inherits: true;
            initial-value: 0;
            syntax: "<number>";
          }
          @property --column-two {
            inherits: true;
            initial-value: 0;
            syntax: "<number>";
          }
          @property --column-three {
            inherits: true;
            initial-value: 0;
            syntax: "<number>";
          }
          @property --column-four {
            inherits: true;
            initial-value: 0;
            syntax: "<number>";
          }
          @property --column-five {
            inherits: true;
            initial-value: 0;
            syntax: "<number>";
          }

          @keyframes one {
            from {
              --column-one: 100;
            }
          }
          @keyframes two {
            from {
              --column-two: 100;
            }
          }
          @keyframes three {
            from {
              --column-three: 100;
            }
          }
          @keyframes four {
            from {
              --column-four: 100;
            }
          }
          @keyframes five {
            from {
              --column-five: 100;
            }
          }

          ::view-transition-new(root) {
            clip-path: polygon(
              /*	1st column */ 0 100%,
              0 calc(var(--column-one) * 1%),
              20% calc(var(--column-one) * 1%),
              20% 100%,
              /*	2nd column */ 20% 100%,
              20% calc(var(--column-two) * 1%),
              40% calc(var(--column-two) * 1%),
              40% 100%,
              /*	3rd column */ 40% 100%,
              40% calc(var(--column-three) * 1%),
              60% calc(var(--column-three) * 1%),
              60% 100%,
              /*	4th column */ 60% 100%,
              60% calc(var(--column-four) * 1%),
              80% calc(var(--column-four) * 1%),
              80% 100%,
              /*	5th column */ 80% 100%,
              80% calc(var(--column-five) * 1%),
              100% calc(var(--column-five) * 1%),
              100% 100%
            );
          }
          ::view-transition-new(root) {
            --speed: 0.625;
            --columns: 5;
            animation: one calc(var(--speed) * 1s)
                calc(sin((0 / 5) * 45deg) * var(--speed) * 1s),
              two calc(var(--speed) * 1s)
                calc(sin((1 / 5) * 45deg) * var(--speed) * 1s),
              three calc(var(--speed) * 1s)
                calc(sin((2 / 5) * 45deg) * var(--speed) * 1s),
              four calc(var(--speed) * 1s)
                calc(sin((3 / 5) * 45deg) * var(--speed) * 1s),
              five calc(var(--speed) * 1s)
                calc(sin((4 / 5) * 45deg) * var(--speed) * 1s);
            animation-fill-mode: both;
            animation-timing-function: linear(
              0 0%,
              0.0027 3.64%,
              0.0106 7.29%,
              0.0425 14.58%,
              0.0957 21.87%,
              0.1701 29.16%,
              0.2477 35.19%,
              0.3401 41.23%,
              0.5982 55.18%,
              0.7044 61.56%,
              0.7987 68.28%,
              0.875 75%,
              0.9297 81.25%,
              0.9687 87.5%,
              0.9922 93.75%,
              1 100%
            );
            z-index: 2;
          }
          ::view-transition-old(root) {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};
