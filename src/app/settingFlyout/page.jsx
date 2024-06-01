"use client";
import React, { useEffect, useState, useRef } from "react";

const Page = () => {
  const [theme, setTheme] = useState("dark");
  const [isChecked, setIsChecked] = useState(true);
  const dialogRef = useRef(null);
  const openRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const open = openRef.current;
    const form = formRef.current;

    const showModal = () => dialog.showModal();
    open.addEventListener("click", showModal);

    const submitHandler = (event) => {
      event.preventDefault();
      dialog.close();
    };
    form.addEventListener("submit", submitHandler);

    const changeHandler = (event) => {
      if (event.target.id === "scheme") {
        setTheme(event.target.value);
      } else {
        syncForm();
      }
    };
    form.addEventListener("change", changeHandler);

    syncForm();

    return () => {
      open.removeEventListener("click", showModal);
      form.removeEventListener("submit", submitHandler);
      form.removeEventListener("change", changeHandler);
    };
  }, []);

  const syncForm = () => {
    const data = new FormData(formRef.current);
    for (const [key, value] of data) {
      document.documentElement.style.setProperty(`--${key}`, value);
    }
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const DesignOne = () => {
    return (
      <svg
        className="w-9"
        viewBox="0 0 969 955"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="161.191"
          cy="320.191"
          r="133.191"
          stroke="currentColor"
          strokeWidth="20"
        ></circle>
        <circle
          cx="806.809"
          cy="320.191"
          r="133.191"
          stroke="currentColor"
          strokeWidth="20"
        ></circle>
        <g className="eyes">
          <circle
            cx="695.019"
            cy="587.733"
            r="31.4016"
            fill="currentColor"
          ></circle>
          <circle
            cx="272.981"
            cy="587.733"
            r="31.4016"
            fill="currentColor"
          ></circle>
        </g>
        <path
          d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z"
          fill="currentColor"
        ></path>
        <rect
          x="310.42"
          y="448.31"
          width="343.468"
          height="51.4986"
          fill="#FF1E1E"
        ></rect>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  };
  const HeaderOne = () => {
    return (
      <header>
        <div className="details">
          <img
            src="https://avatars.githubusercontent.com/u/842246"
            width="48"
            alt="Avatar"
          />
          <span>jh3yy</span>
          <a
            href="mailto:config@jhey.dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            config@jhey.dev
          </a>
        </div>
        <a
          className="links"
          href="https://jhey.dev/links"
          rel="noopener noreferrer"
          target="_blank"
        >
          Links
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
        <a
          className="sponsor button invert"
          href="https://github.com/sponsors/jh3y"
          rel="noreferrer noopener"
          target="_blank"
        >
          Sponsor
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
        <a
          className="follow button"
          href="https://twitter.com/intent/follow?screen_name=jh3yy"
          rel="noreferrer noopener"
          target="_blank"
        >
          Follow
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
      </header>
    );
  };

  return (
    <>
      <a
        className="bear-link"
        href="https://twitter.com/intent/follow?screen_name=jh3yy"
        target="_blank"
        rel="noreferrer noopener"
      >
        <DesignOne />
      </a>
      <button className="open" ref={openRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Open settings</span>
      </button>
      <h1>check the settings.</h1>
      <dialog ref={dialogRef}>
        <HeaderOne />
        <hr />
        <form ref={formRef}>
          <label htmlFor="scheme">Color scheme</label>
          <select autoFocus name="scheme" id="scheme">
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
          <label htmlFor="backdrop">Backdrop</label>
          <label htmlFor="backdrop" className="switch">
            <input
              name="backdrop"
              className="sr-only"
              type="checkbox"
              role="switch"
              id="backdrop"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
          </label>
          <label htmlFor="duration">Duration(s)</label>
          <input
            name="duration"
            type="range"
            id="duration"
            min="0.1"
            max="2"
            step="0.1"
            defaultValue="0.3"
          />
          <label htmlFor="translate">Translate(lh)</label>
          <input
            name="translate"
            type="range"
            id="translate"
            min="0"
            max="20"
            step="1"
            defaultValue="12"
          />
          <label htmlFor="scale">Scale</label>
          <input
            name="scale"
            type="range"
            id="scale"
            min="0"
            max="1"
            step="0.01"
            defaultValue="0.95"
          />
          <label htmlFor="blur">Blur(px)</label>
          <input
            name="blur"
            type="range"
            id="blur"
            min="0"
            max="40"
            step="1"
            defaultValue="10"
          />
          <hr />
          <footer>
            <button>Cancel</button>
            <button>Save</button>
          </footer>
        </form>
      </dialog>
      <style jsx>{`
        @layer base, visit;

        @layer visit {
          :root {
            --speed: calc(var(--duration) * 1s);
            --accent: hsl(6 90% 50%);
            --bounce-out: linear(
              0 0%,
              0.5583 3.72%,
              0.9549 7.72%,
              1.0968 9.86%,
              1.2039 12.13%,
              1.2783 14.57%,
              1.3213 17.23%,
              1.3317 18.7%,
              1.3345 20.27%,
              1.3296 21.97%,
              1.3171 23.83%,
              1.2806 27.25%,
              1.1551 36.58%,
              1.096 41.71%,
              1.0465 47.53%,
              1.014 53.68%,
              0.997 59.87%,
              0.9899 67.32%,
              1 100%
            );
            --easing: linear(
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
            accent-color: var(--accent);
          }
          dialog {
            --present: 0;
            scale: calc(var(--scale) + ((1 - var(--scale)) * var(--present)));
            opacity: var(--present);
            filter: blur(calc((var(--blur) * (1 - var(--present))) * 1px));
            translate: 0
              calc(calc(var(--translate) * 1lh) * (1 - var(--present)));
            width: 40ch;
            min-height: 100px;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08),
              0px 1px 1px rgba(0, 0, 0, 0.02),
              0px 4px 8px -4px rgba(0, 0, 0, 0.04),
              0px 16px 24px -8px rgba(0, 0, 0, 0.06);
            border-radius: 6px;
            color: color-mix(in lch, #ffffff, #000000 20%);
            border: 1px solid color-mix(in lch, #000000, #ffffff 10%);
            padding: 1rem;
            font-size: 14px;
            margin: auto;
            display: grid;
            gap: 0.5rem;
            transition: all var(--speed) var(--easing) allow-discrete,
              /*       display var(--speed) var(--easing) allow-discrete,
            scale var(--speed) var(--easing),
            opacity var(--speed) var(--easing),
            filter var(--speed) var(--easing), */
                translate calc(var(--speed) * calc(1 + var(--present)))
                var(--move, var(--easing));
            /**
          * This is the "magic" piece
          * transition: display var(--speed) allow-discrete, overlay var(--speed) allow-discrete;
          * or transition-behavior: allow-discrete;
          * it acts like a hold animation so you can do whatever you want as long as that's on
          */
          }
          dialog[open] {
            --present: 1;
            --move: var(--bounce-out);
          }
          @starting-style {
            dialog[open] {
              --present: 0;
            }
          }

          /* ::backdrop if required */
          :root:has(#backdrop:checked) {
            --drop: 1;
          }
          dialog::backdrop {
            --present: 0;
            background-color: color-mix(in lch, #000000, transparent 80%);
            backdrop-filter: blur(4px);
            opacity: calc(var(--present) * var(--drop, 0));
            transition: overlay var(--speed) var(--easing) allow-discrete,
              opacity var(--speed) var(--easing);
          }
          dialog[open]::backdrop {
            --present: 1;
          }
          @starting-style {
            dialog[open]::backdrop {
              --present: 0;
            }
          }
        }

        @layer base {
          *,
          *:after,
          *:before {
            box-sizing: border-box;
            color: inherit;
            font: inherit;
            outline-color: var(--accent);
          }

          body {
            display: grid;
            place-items: center;
            min-height: 100vh;
            font-family: "SF Pro Text", "SF Pro Icons", "AOS Icons",
              "Helvetica Neue", Helvetica, Arial, sans-serif, system-ui;
            color: #ffffff;
          }
          html,
          [data-theme="light"] {
            color-scheme: light only;
          }

          [data-theme="dark"] {
            color-scheme: dark only;
          }
          @media (prefers-color-scheme: dark) {
            html {
              color-scheme: dark only;
            }
          }

          body::before {
            --line: color-mix(in lch, #ffffff 25%, transparent);
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
            mask: linear-gradient(-30deg, transparent 60%, white);
            top: 0;
            z-index: -1;
          }

          h1 {
            font-size: clamp(2rem, 2vw + 1rem, 8rem);
            font-weight: 600;
            color: color-mix(#ffffff, #000000 15%);
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

          .bear-link {
            color: #ffffff;
            position: fixed;
            top: 1rem;
            left: 1rem;
            width: 48px;
            aspect-ratio: 1;
            display: grid;
            place-items: center;
            opacity: 0.8;
          }

          :where(.x-link, .bear-link):is(:hover, :focus-visible) {
            opacity: 1;
          }
          .bear-link svg {
            width: 75%;
          }

          .open {
            position: fixed;
            top: 1rem;
            right: 1rem;
          }
          button {
            border-radius: 6px;
            border: 0;
            background: transparent;
            color: color-mix(in lch, #ffffff, #000000 25%);
            cursor: pointer;
            background: color-mix(
              in lch,
              #000000,
              #ffffff calc(var(--intent, 0) * 15%)
            );
          }

          button:has(svg) {
            padding: 0;
            display: grid;
            place-items: center;
            width: 48px;
            aspect-ratio: 1;
          }

          button svg {
            width: 50%;
          }

          .close {
            position: absolute;
            top: 1rem;
            right: 1rem;
          }

          .open svg {
            rotate: calc(var(--intent, 0) * 180deg);
            transition: rotate 0.25s linear;
          }

          button:is(:hover, :focus-visible) {
            --intent: 1;
          }

          hr {
            width: 100%;
            opacity: 0.4;
          }

          header > a {
            padding-block: 6px;
          }

          .details {
            display: grid;
            gap: 0 0.5rem;
            place-items: center;
            justify-content: start;
            grid-template: 1fr 1fr / auto 1fr;
            margin-bottom: 0.5em;
          }

          .details :is(a, span) {
            justify-self: start;
          }

          .details span {
            align-self: end;
            font-weight: 600;
          }
          .details a {
            align-self: start;
            text-decoration: none;
          }

          .details img {
            border-radius: 50%;
            grid-row: span 2;
          }

          a {
            display: flex;
            text-decoration: none;
            justify-content: space-between;
          }

          :is(a, label) {
            color: color-mix(in lch, #ffffff, transparent 50%);
          }
          a:is(:hover, :focus-visible) {
            --intent: 1;
            color: #ffffff;
          }

          header a svg {
            width: 16px;
          }

          header a svg path {
            transform-box: fill-box;
            transform-origin: center;
          }
          header a:is(:hover, :focus-visible) svg path {
            transition: translate 0.25s var(--easing);
          }

          header a svg path:first-of-type {
            translate: calc(-150% + (var(--intent, 0) * 150%))
              calc(150% - (var(--intent, 0) * 150%));
          }
          header a svg path:last-of-type {
            translate: calc(var(--intent, 0) * 150%)
              calc(var(--intent, 0) * -150%);
          }

          footer {
            display: flex;
            justify-content: flex-end;
            gap: 0.5rem;
            grid-column: 1 / -1;
          }

          footer button {
            padding: 0.5rem 1rem;
          }

          footer button:last-of-type {
            background: color-mix(
              in lch,
              #ffffff,
              #000000 calc(var(--intent, 0) * 30%)
            );
            color: #000000;
          }

          form {
            display: grid;
            align-items: center;
            grid-template-columns: 1fr auto;
          }

          form hr {
            grid-column: 1 / -1;
          }

          label {
            padding-block: 6px;
          }

          .switch {
            cursor: pointer;
            display: inline-block;
            border: 1px solid color-mix(in lch, currentColor, transparent);
            width: 24px;
            height: 16px;
            border-radius: 100px;
            justify-self: end;
            position: relative;
          }

          .switch:has(input:focus-visible) {
            outline: 2px solid var(--accent);
            outline-offset: 2px;
          }

          .switch:has(:checked)::after {
            background: var(--accent);
            translate: 8px 0;
          }

          .switch::after {
            background: currentColor;
            content: "";
            position: absolute;
            left: 0;
            top: 0%;
            height: 100%;
            aspect-ratio: 1;
            border-radius: 50%;
            transition: background 0.2s var(--easing),
              translate 0.2s var(--easing);
          }

          ::view-transition-new(root) {
            animation: reveal 1s;
            clip-path: inset(0 0 0 0);
            z-index: 2;
          }
          ::view-transition-old(root) {
            z-index: -1;
            animation: none;
          }
          @keyframes reveal {
            from {
              clip-path: inset(var(--from));
            }
          }

          [data-theme="dark"] {
            --from: 0 0 100% 0;
          }
          [data-theme="light"] {
            --from: 100% 0 0 0;
          }
          [data-theme="system"] {
            --from: 0 100% 0 0;
          }
        }
      `}</style>
    </>
  );
};

export default Page;
