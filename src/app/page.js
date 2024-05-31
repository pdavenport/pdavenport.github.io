"use client";
import { nicky } from "./fonts";
import Image from "next/image";
import nightJapan3 from "../../public/nightJapan3.jpg";

export default function HomePage() {
  return (
    <>
      <Image
        alt="City"
        src={nightJapan3}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute">
        <h1
          className={`${nicky.className} lg:text-8xl md:text-5xl text-3xl p-2 headline`}
        >
          Hello, Welcome
        </h1>
      </div>
      <div className="relative">
        <h2
          className={`${nicky.className} lg:text-8xl md:text-5xl text-3xl p-2 headline flipped opacity-50 lg:mt-[600px] md:mt-[400px] mt-[350px]`}
        >
          Hello, Welcome
        </h2>
      </div>
      <style jsx>{`
        .flipped {
          transform: scale(1, -1);
        }
        .headline {
          background: conic-gradient(
              from var(--angle, 180deg) at 50% 70%,
              hsla(0, 0%, 98%, 1) 0deg,
              #eec32d 72.0000010728836deg,
              #ec4b4b 144.0000021457672deg,
              #709ab9 216.00000858306885deg,
              #4dffbf 288.0000042915344deg,
              hsla(0, 0%, 98%, 1) 1turn
            ),
            linear-gradient(
              var(--secondary) 0 calc(var(--spread, 4) * 1lh),
              transparent
            );
          background-size: 100% calc(var(--highlight) * 1lh),
            100% calc(100% - (var(--highlight) * 1lh));
          background-position: 0 0, 0 calc(var(--highlight) * 1lh);
          background-clip: text;
          color: transparent;
          text-wrap: balance;
          display: inline-block;
          text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500,
            0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00,
            0 0 98px #ff0000;
          color: transparent;
          -webkit-text-stroke-width: 6px;
          -webkit-text-stroke-color: #2b2b2b;

          &:before {
            content: "Hello, Welcome";
            position: absolute;
            top: 0;
            left: 0;
            color: transparentize(#2b2c2d, 0.9);
            text-shadow: 0px 0px 60px transparentize(lighten(red, 10%), 0.3);
            -webkit-text-stroke-width: 6px;
            -webkit-text-stroke-color: red;
          }
          &:after {
            content: "Hello, Welcome";
            position: absolute;
            top: 0;
            left: 0;
            color: transparent;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: rgba(255, 255, 255, 0.8);
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          @property --angle {
            inherits: true;
            initial-value: 180deg;
            syntax: "<angle>";
          }
          @keyframes rotate {
            to {
              --angle: 540deg;
            }
          }
          [data-gradient="true"][data-animate="true"] {
            animation: rotate 6s infinite linear;
          }
        }
      `}</style>
    </>
  );
}
