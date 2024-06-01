"use client";
import { nicky } from "./fonts";
import Image from "next/image";
import nightJapan3 from "../../public/nightJapan3.jpg";

// TODO: better font for nav bar

export default function HomePage() {
  return (
    <>
    <div className="fixed w-screen h-screen">
      <Image
        alt="City"
        src={nightJapan3}
        placeholder="blur"
        quality={70}
        sizes="100vw"
        objectFit="cover"
        className="object-cover w-full h-full"
      />
      </div>
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
      `}</style>
    </>
  );
}
