"use client";
import { useState, useEffect } from "react";

export const CssSineWave = () => {
  const [rings, setRings] = useState([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 500;
    setRings(Array.from({ length: isMobile ? 10 : 20 }, (_, i) => i + 1));
  }, []);

  return (
    <>
      <div className="rings max-w-[300px] aspect-square relative m-auto">
        {rings.map((index) => (
          <div key={index} className="ring" style={{ "--index": index }} />
        ))}
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
          transform-style: preserve-3d;
        }

        body {
          display: grid;
          place-items: center;
          min-height: 100vh;
          margin: 0;
        }

        .rings {
          width: 50vmin;
          transform: translate3d(0, 0, 100vmin) rotateX(-32deg) rotateY(-32deg)
            rotateX(90deg);
        }

        .ring {
          --count: 20;
          --scale-base: calc(((100 / 20) * var(--index)) * 1%);
          --scale-top: calc(((100 / 20) * var(--index)) * 1%);
          width: calc(((100 / 20) * var(--index)) * 4%);
          aspect-ratio: 1;
          position: absolute;
          top: 50%;
          left: 50%;
          translate: -50% -50%;
          transform: translate3d(0, 0, calc(50 * -1vmin));
          animation: float 50s infinite cubic-bezier(0.25, 0.1, 0.25, 1);
          animation-delay: calc(sin((var(--index) / 20) * 45deg) * 32 * -1s);
        }

        .ring::after {
          content: "";
          border: 2px solid oklch(0.5 2 180);
          border-radius: calc(0 * 1%);
          position: absolute;
          inset: 0;
          animation: hue calc(32 * 1s) infinite cubic-bezier(0.25, 0.1, 0.25, 1);
          animation-delay: calc(sin((var(--index) / 20) * 45deg) * 32 * -1s);
        }

        @keyframes hue {
          50% {
            filter: hue-rotate(calc((320 - 180) * 1deg));
          }
        }

        @keyframes float {
          50% {
            transform: translate3d(0, 0, calc(50 * 1vmin));
          }
          0%,
          45% {
            width: calc(((100 / 20) * var(--index)) * 4%);
          }
          75% {
            width: calc(((100 / 20) * var(--index)) * 4%);
          }
        }

        @keyframes float-alternate {
          100% {
            transform: translate3d(0, 0, calc(50 * 1vmin));
          }
          0%,
          45% {
            width: calc(((100 / 20) * var(--index)) * 4%);
          }
          75% {
            width: calc(((100 / 20) * var(--index)) * 4%);
          }
        }
      `}</style>
    </>
  );
};
