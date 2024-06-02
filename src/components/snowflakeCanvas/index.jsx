"use client";
import { useEffect, useRef } from "react";
import snowflake1 from "@public/snowflake1.png";
import { Application, Assets, Sprite, Container } from "pixi.js";
import { gsap } from "gsap";

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

export const SnowflakeCanvas = () => {
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
      <div
        ref={canvasRef}
        className="md:z-10 h-screen w-screen overflow-hidden absolute"
      ></div>
    </>
  );
};
