"use client";
import { useEffect, useRef, useState, createRef } from "react";

export const NavBar = () => {
  const magneticRef = useRef(null);
  const nav = magneticRef.current;
  const [anchors, setAnchors] = useState([]);
  const [supportsAnchorPos, setSupportsAnchorPos] = useState(false);

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
  /**
   * If there's no Anchor Positionioning support fill the gap ourselves.
   * The Oddbird polyfill struggles with dynamic anchoring
   * We can just set the positions via custom properties when there is a
   * layout change
   * */

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

  /**
   * Regardless of whether you have anchor positioning or not, a progressive touch
   * is to store the previously hovered piece so on pointerleave you get the fade out
   * */
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
        <ul>
          <li>
            <a href="#home" id="home">
              Home
            </a>
          </li>
          <li>
            <a href="#links" id="links">
              Links
            </a>
          </li>
          <li>
            <a href="#rates" id="rates">
              Rates
            </a>
          </li>
          <li>
            <a href="#speaking" id="speaking">
              Speaking
            </a>
          </li>
          <li>
            <a href="#ai" id="ai">
              AI
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/intent/follow?screen_name=jh3yy"
              id="follow"
              target="_blank"
              rel="noreferrer noopener"
            >
              Follow
            </a>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        *,
        *:after,
        *:before {
          box-sizing: border-box;
        }

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
          display: flex;
          margin: 0;
          padding: 0;
          list-style: none;
          position: relative;
          flex-wrap: wrap;
          color: color-mix(in lch, canvasText 50%, canvas);
          transition: color 0.2s;
          touch-action: none;
        }

        li {
          font-weight: 400;
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

        /**
         * Theming
         * */
        .theme {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          width: 48px;
          aspect-ratio: 1;
          border: 0;
          border-radius: 6px;
          cursor: pointer;
          background: transparent;
          display: grid;
          place-items: center;
        }

        .theme:is(:hover, :focus-visible) {
          --intent: 1;
          background: color-mix(in lch, canvasText, canvas 85%);
        }

        html.dark {
          color-scheme: dark only;
        }
        html.light {
          color-scheme: light only;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        .theme[aria-pressed="true"] path:first-of-type,
        .theme[aria-pressed="false"] path:last-of-type {
          display: block;
        }
        .theme[aria-pressed="true"] path:last-of-type,
        .theme[aria-pressed="false"] path:first-of-type {
          display: none;
        }

        button svg {
          width: 55%;
        }

        .light::view-transition-new(root) {
          mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path fill="white" d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" /></svg>')
            center / 0 no-repeat;
          animation: scale 2s;
          z-index: 10;
        }
        .dark::view-transition-new(root),
        .light::view-transition-old(root) {
          animation: none;
          mix-blend-mode: normal;
          z-index: -1;
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