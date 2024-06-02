"use client";
import { useRef, useEffect } from "react";
import { nicky } from "@/app/fonts";
export const HeadlineRotation = () => {
  const headlineElement = useRef(null);

  useEffect(() => {
    let animationId = null;
    // make sure the element is mounted before trying to animate
    if (headlineElement.current) {
      let angle = 180;
      const animate = () => {
        angle = (angle + 0.25) % 720;
        if (angle > 540) angle = 180;
        // make sure the element is still mounted before trying to animate
        // (most applicable when navigating away from the page before the animation is done)
        if (headlineElement.current) {
          headlineElement.current.style.setProperty("--angle", `${angle}deg`);
        }
        animationId = requestAnimationFrame(animate);
      };
      animate();
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);
  return (
    <>
      <h1
        ref={headlineElement}
        className={`${nicky.className} font-thin leading-none bg-no-repeat headline text-5xl max-w-[290px] hidden md:inline-block md:max-w-full`}
      >
        I&apos;m glad you&apos;re here.
      </h1>
      <style jsx>{`
        .headline {
          background: conic-gradient(
              from var(--angle, 180deg) at 50% 70%,
              #d400ff 0deg,
              #7171ff 25deg,
              #009dff 50deg,
              #00bcff 75deg,
              #00d3ff 100deg,
              #00e5ff 125deg,
              #00f3f3 150deg,
              #00ffd5 175deg,
              #00f3f3 200deg,
              #00e5ff 225deg,
              #00d3ff 250deg,
              #00bcff 275deg,
              #009dff 300deg,
              #7171ff 325deg,
              #d400ff 1turn
            ),
            linear-gradient(#606060 0 calc(4 * 1lh), transparent);
          background-size: 100% calc(var(--highlight) * 1lh),
            100% calc(100% - (var(--highlight) * 1lh));
          background-position: 0 0, 0 calc(var(--highlight) * 1lh);
          background-clip: text;
          color: transparent;
          text-wrap: balance;
        }
      `}</style>
    </>
  );
};
