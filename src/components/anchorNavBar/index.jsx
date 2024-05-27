"use client";
import { useEffect, useRef, useState, createRef } from "react";
import { usePathname } from "next/navigation";

export const AnchorNavBar = ({ props }) => {
  const pathName = usePathname();
  const magneticRef = useRef(null);
  const nav = magneticRef.current;
  const [anchors, setAnchors] = useState([]);
  const [supportsAnchorPos, setSupportsAnchorPos] = useState(false);
  console.log(pathName);

  useEffect(() => {
    setSupportsAnchorPos("anchorName" in document.documentElement.style);
  }, []);

  const sync = (nav, anchors) => () => {
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i].current;
      if (anchor) {
        anchor.style.setProperty("view-transition-name", `item-${i + 1}`);
        if (!supportsAnchorPos) {
          const bounds = anchor.getBoundingClientRect();
          nav.style.setProperty(`--item-${i + 1}-x`, bounds.left);
          nav.style.setProperty(`--item-${i + 1}-y`, bounds.top);
          nav.style.setProperty(`--item-${i + 1}-width`, bounds.width);
          nav.style.setProperty(`--item-${i + 1}-height`, bounds.height);
        }
      }
    }
  };

  useEffect(() => {
    const magneticElement = magneticRef.current;
    if (magneticElement) {
      const anchorEls = magneticElement.querySelectorAll("a");
      setAnchors((refs) =>
        Array.from(anchorEls).map((_, i) => refs[i] || createRef())
      );
    }
  }, []);

  useEffect(() => {
    const nav = magneticRef.current;
    if (nav) {
      const calibrate = sync(nav, anchors);
      if (!supportsAnchorPos) {
        document.documentElement.dataset.noAnchor = true;
        calibrate();
        window.addEventListener("resize", calibrate);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchors]);

  const falloff = (index) => () => {
    if (!supportsAnchorPos) {
      nav.style.setProperty("--item-active-x", `var(--item-${index + 1}-x)`);
      nav.style.setProperty("--item-active-y", `var(--item-${index + 1}-y)`);
      nav.style.setProperty(
        "--item-active-width",
        `var(--item-${index + 1}-width)`
      );
      nav.style.setProperty(
        "--item-active-height",
        `var(--item-${index + 1}-height)`
      );
    }
  };
  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i].current;
    if (anchor) {
      anchor.addEventListener("pointerenter", falloff(i));
    }
  }

  const deactivate = async () => {
    if (!supportsAnchorPos) {
      const transitions = document.getAnimations();
      if (transitions.length) {
        const fade = transitions.find(
          (t) =>
            t.effect.target === nav.firstElementChild &&
            t.transitionProperty === "opacity"
        );
        if (fade) {
          await Promise.allSettled([fade.finished]);
        }

        nav.style.removeProperty("--item-active-x");
        nav.style.removeProperty("--item-active-y");
        nav.style.removeProperty("--item-active-width");
        nav.style.removeProperty("--item-active-height");
      }
    }
  };

  return (
    <>
      <nav ref={magneticRef} onPointerLeave={deactivate} onBlur={deactivate}>
        <ul className="flex m0 p0 list-none relative flex-wrap touch-none flex-col">
          <li>
            <a href="#home" id="home">
              Home
            </a>
          </li>
          <li>
            <a href="#about" id="about">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" id="portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" id="contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        body {
          display: flex;
          place-items: center;
          justify-content: center;
          min-height: 100svh;
          font-family: "SF Pro Text", "SF Pro Icons", "AOS Icons",
            "Helvetica Neue", Helvetica, Arial, sans-serif, system-ui;
          margin: 0;
          padding: 0.5rem;
        }

        body::before {
          --line: color-mix(in lch, canvasText 25%, transparent);
          --size: 40px;
          content: "";
          height: 100vh;
          width: 100vw;
          position: fixed;
          background: linear-gradient(
                90deg,
                var(--line) 1px,
                transparent 1px var(--size)
              )
              0 -5vmin / var(--size) var(--size),
            linear-gradient(var(--line) 1px, transparent 1px var(--size)) 0 -5vmin /
              var(--size) var(--size);
          mask: linear-gradient(-15deg, transparent 60%, white);
          top: 0;
          z-index: -1;
        }

        ul {
          color: color-mix(in lch, canvasText 50%, canvas);
          transition: color 0.2s;
        }

        li a {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          color: currentColor;
          text-decoration: none;
        }

        :is(a, button) {
          outline-color: color-mix(in lch, canvasText, transparent 50%);
        }

        a:is(:focus-visible, :hover),
        ul:has(a:target:is(:focus-visible, :hover))::after {
          color: canvasText;
        }

        [data-no-anchor]
          ul:has(li:nth-of-type(1) a:is(:hover, :focus-visible)) {
          --item-active-y: var(--item-1-y);
          --item-active-x: var(--item-1-x);
          --item-active-width: var(--item-1-width);
          --item-active-height: var(--item-1-height);
        }
        [data-no-anchor]
          ul:has(li:nth-of-type(2) a:is(:hover, :focus-visible)) {
          --item-active-y: var(--item-2-y);
          --item-active-x: var(--item-2-x);
          --item-active-width: var(--item-2-width);
          --item-active-height: var(--item-2-height);
        }
        [data-no-anchor]
          ul:has(li:nth-of-type(3) a:is(:hover, :focus-visible)) {
          --item-active-y: var(--item-3-y);
          --item-active-x: var(--item-3-x);
          --item-active-width: var(--item-3-width);
          --item-active-height: var(--item-3-height);
        }
        [data-no-anchor]
          ul:has(li:nth-of-type(4) a:is(:hover, :focus-visible)) {
          --item-active-y: var(--item-4-y);
          --item-active-x: var(--item-4-x);
          --item-active-width: var(--item-4-width);
          --item-active-height: var(--item-4-height);
        }
        [data-no-anchor]
          ul:has(li:nth-of-type(5) a:is(:hover, :focus-visible)) {
          --item-active-y: var(--item-5-y);
          --item-active-x: var(--item-5-x);
          --item-active-width: var(--item-5-width);
          --item-active-height: var(--item-5-height);
        }
        [data-no-anchor]
          ul:has(li:nth-of-type(6) a:is(:hover, :focus-visible)) {
          --item-active-y: var(--item-6-y);
          --item-active-x: var(--item-6-x);
          --item-active-width: var(--item-6-width);
          --item-active-height: var(--item-6-height);
        }

        [data-no-anchor] ul:has(li:nth-of-type(1) a:target) {
          --target-y: var(--item-1-y);
          --target-x: var(--item-1-x);
          --target-width: var(--item-1-width);
          --target-height: var(--item-1-height);
        }
        [data-no-anchor] ul:has(li:nth-of-type(2) a:target) {
          --target-y: var(--item-2-y);
          --target-x: var(--item-2-x);
          --target-width: var(--item-2-width);
          --target-height: var(--item-2-height);
        }
        [data-no-anchor] ul:has(li:nth-of-type(3) a:target) {
          --target-y: var(--item-3-y);
          --target-x: var(--item-3-x);
          --target-width: var(--item-3-width);
          --target-height: var(--item-3-height);
        }
        [data-no-anchor] ul:has(li:nth-of-type(4) a:target) {
          --target-y: var(--item-4-y);
          --target-x: var(--item-4-x);
          --target-width: var(--item-4-width);
          --target-height: var(--item-4-height);
        }
        [data-no-anchor] ul:has(li:nth-of-type(5) a:target) {
          --target-y: var(--item-5-y);
          --target-x: var(--item-5-x);
          --target-width: var(--item-5-width);
          --target-height: var(--item-5-height);
        }
        [data-no-anchor] ul:has(li:nth-of-type(6) a:target) {
          --target-y: var(--item-6-y);
          --target-x: var(--item-6-x);
          --target-width: var(--item-6-width);
          --target-height: var(--item-6-height);
        }

        ul:has(a:is(:focus-visible, :hover)) {
          --intent: 1;
        }

        ul::before,
        ul::after {
          --transition: 0.18s;
          content: "";
          position: fixed;
          pointer-events: none;
          top: calc(var(--item-active-y) * 1px);
          left: calc(var(--item-active-x) * 1px);
          height: calc(var(--item-active-height) * 1px);
          width: calc(var(--item-active-width) * 1px);
          opacity: var(--intent, 0);
          z-index: -1;
          border-radius: 6px;
          background: color-mix(in lch, canvasText, canvas 85%);
          transition: all var(--transition), top var(--transition),
            left var(--transition), height var(--transition),
            opacity var(--transition), color var(--transition),
            width var(--transition);
          transition-timing-function: linear(
            0 0%,
            0.2342 12.49%,
            0.4374 24.99%,
            0.6093 37.49%,
            0.6835 43.74%,
            0.7499 49.99%,
            0.8086 56.25%,
            0.8593 62.5%,
            0.9023 68.75%,
            0.9375 75%,
            0.9648 81.25%,
            0.9844 87.5%,
            0.9961 93.75%,
            1 100%
          );
        }

        ul::after {
          top: calc(var(--target-y) * 1px);
          left: calc((var(--target-x) * 1px) + 1.25rem);
          height: calc(var(--target-height) * 1px);
          width: calc((var(--target-width) * 1px) - 2.5rem);
          opacity: 1;
          background: transparent;
          border-radius: 0;
          border-bottom: 2px solid currentColor;
          view-transition-name: target;
        }

        /* Targeting */
        @supports (anchor-name: --a) {
          nav {
            --anchor: var(--item-active);
          }

          nav li:nth-of-type(1) {
            anchor-name: --item-1;
          }
          nav li:nth-of-type(2) {
            anchor-name: --item-2;
          }
          nav li:nth-of-type(3) {
            anchor-name: --item-3;
          }
          nav li:nth-of-type(4) {
            anchor-name: --item-4;
          }
          nav li:nth-of-type(5) {
            anchor-name: --item-5;
          }
          nav li:nth-of-type(6) {
            anchor-name: --item-6;
          }

          nav:has(li:nth-of-type(1) a:is(:hover, :focus-visible)) {
            --anchor: --item-1;
          }
          nav:has(li:nth-of-type(2) a:is(:hover, :focus-visible)) {
            --anchor: --item-2;
          }
          nav:has(li:nth-of-type(3) a:is(:hover, :focus-visible)) {
            --anchor: --item-3;
          }
          nav:has(li:nth-of-type(4) a:is(:hover, :focus-visible)) {
            --anchor: --item-4;
          }
          nav:has(li:nth-of-type(5) a:is(:hover, :focus-visible)) {
            --anchor: --item-5;
          }
          nav:has(li:nth-of-type(6) a:is(:hover, :focus-visible)) {
            --anchor: --item-6;
          }

          nav:has(li:nth-of-type(1) a:target) {
            --target: --item-1;
          }
          nav:has(li:nth-of-type(2) a:target) {
            --target: --item-2;
          }
          nav:has(li:nth-of-type(3) a:target) {
            --target: --item-3;
          }
          nav:has(li:nth-of-type(4) a:target) {
            --target: --item-4;
          }
          nav:has(li:nth-of-type(5) a:target) {
            --target: --item-5;
          }
          nav:has(li:nth-of-type(6) a:target) {
            --target: --item-6;
          }

          ul::before {
            left: anchor(var(--anchor) left);
            top: anchor(var(--anchor) top);
            width: anchor-size(var(--anchor) width);
            height: anchor-size(var(--anchor) height);
          }

          ul::after {
            left: calc(anchor(var(--target) left) + 1.25rem);
            top: anchor(var(--target) top);
            width: calc(anchor-size(var(--target) width) - 2.5rem);
            height: anchor-size(var(--target) height);
          }
        }

        ::view-transition-group(target),
        ::view-transition-group(item) {
          mix-blend-mode: normal;
        }

        @keyframes scale {
          to {
            mask-size: 500vmax;
          }
        }

        [data-flip-ui="true"] {
          view-transition-name: none;
        }
      `}</style>
    </>
  );
};
