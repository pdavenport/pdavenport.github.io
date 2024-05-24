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
    </>
  );
};

export default Page;
