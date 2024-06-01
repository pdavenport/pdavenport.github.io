"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import snowjapan1 from "@public/snowjapan1.jpeg";
import snowflake1 from "@public/snowflake1.png";
import { Application, Assets, Sprite, Container } from "pixi.js";
import { gsap } from "gsap";
import { AnchorNavBar } from "@/components/anchorNavBar";
import { palmore } from "@/app/fonts";
import { ProjectsScroller } from "@/components/projectsScroller";

const random = (min, max) => {
  if (max == null) {
    max = min;
    min = 0;
  }
  if (min > max) {
    const tmp = min;
    min = max;
    max = tmp;
  }
  return min + (max - min) * Math.random();
};

export default function ProjectsPage() {
  const canvasRef = useRef(null);
  useEffect(() => {
    (async () => {
      const app = new Application();
      await app.init({
        backgroundAlpha: 0,
        resizeTo: window,
      });
      canvasRef.current && canvasRef.current.appendChild(app.canvas);

      const snowflakeTexture = await Assets.load(snowflake1);
      const sprites = new Container();
      app.stage.addChild(sprites);
      const snowflakes = [];
      const total = 1000;

      for (let i = 0; i < total; i++) {
        const snowflake = new Sprite(snowflakeTexture);

        snowflake.anchor.set(0.5);
        snowflake.scale.set(random(0.15, 1.05));

        snowflakes.push(snowflake);
        sprites.addChild(snowflake);
      }

      const w = window.innerWidth;
      const h = window.innerHeight;

      for (let i = 0; i < total; i++) {
        const snowflake = snowflakes[i];
        snowflake.position.set(random(-200, w + 200), random(-200, -150));
        gsap.to(snowflake, {
          duration: random(7, 10),
          x: "-=200",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(snowflake, {
          duration: random(5, 8),
          y: h + 100,
          ease: "none",
          repeat: -1,
          delay: -15,
        });
      }

      app.ticker.start();
      gsap.to(app.stage, { alpha: 1, delay: 0.25, duration: 1 });
    })();
  }, []);

  return (
    <>
      <Image
        alt="City"
        src={snowjapan1}
        placeholder="blur"
        quality={100}
        className="object-cover w-full h-full z-0"
      />
      <div
        ref={canvasRef}
        className="md:z-10 h-screen w-screen overflow-hidden absolute"
      ></div>
      <div className="absolute md:z-0 z-40 top-10 md:top-32">
        <h1 className={`text-9xl headline p-2 font-bold ${palmore.className}`}>
          PROJECTS
        </h1>
      </div>
      <div className="absolute md:relative bottom-0 flex gap-10 md:flex-row flex-col mt-20">
        <div className="md:z-40 bg-black rounded-lg anchornav hidden md:block">
          <AnchorNavBar />
        </div>
        <ProjectsScroller />
      </div>
      <style jsx>{`
        .anchornav {
          box-shadow: 0 0 5px #f72119, 0 0 15px #f72119, 0 0 20px #f72119,
            0 0 40px #f72119, 0 0 60px #f72119, 0 0 10px #f72119,
            0 0 98px #f72119;
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
          text-shadow: 0 0 5px #f72119, 0 0 15px #f72119, 0 0 20px #f72119,
            0 0 40px #f72119, 0 0 60px #f72119, 0 0 10px #f72119,
            0 0 98px #f72119;
          color: transparent;
          -webkit-text-stroke-width: 6px;
          -webkit-text-stroke-color: #2b2b2b;

          &:before {
            content: "PROJECTS";
            position: absolute;
            top: 0;
            left: 0;
            color: transparentize(#2b2c2d, 0.9);
            text-shadow: 0px 0px 60px transparentize(lighten(red, 10%), 0.3);
            -webkit-text-stroke-width: 6px;
            -webkit-text-stroke-color: red;
          }
          &:after {
            content: "PROJECTS";
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
