"use client";
import { nicky } from "@/app/fonts";
import { useRef, useEffect } from "react";
export const MaskedText = () => {
  const headlineElement = useRef(null);

  useEffect(() => {
    let animationId = null;
    // make sure the element is mounted before trying to animate
    if (headlineElement.current) {
      let angle = 180;
      const animate = () => {
        angle = (angle + 0.5) % 720;
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
      <div data-gradient={true} data-animate={true}>
        <h1
          className={`leading-none bg-no-repeat ${nicky.className}`}
          ref={headlineElement}
        >
          L&apos;amore dice Ciao
        </h1>
      </div>
      <style jsx>{`
        h1 {
          background: conic-gradient(
              from var(--angle, 180deg) at 50% 70%,
              hsla(0, 0%, 98%, 1) 0deg,
              #eec32d 72.0000010728836deg,
              #ec4b4b 144.0000021457672deg,
              #709ab9 216.00000858306885deg,
              #4dffbf 288.0000042915344deg,
              hsla(0, 0%, 98%, 1) 1turn
            ),
            linear-gradient(#606060 0 calc(4 * 1lh), transparent);
          background-size: 100% calc(4 * 1lh), 100% calc(100% - (4 * 1lh));
          background-position: 0 0, 0 calc(4 * 1lh);
          background-clip: text;
          color: transparent;
          text-wrap: balance;
          font-size: 80px;
          display: inline-block;
        }
      `}</style>
    </>
  );
};
