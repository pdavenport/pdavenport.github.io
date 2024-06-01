"use client";
import { CssSineWave } from "@/components/cssSineWave";
import { TextScroller } from "@/components/textScroller";
import { nicky } from "../fonts";
import { useRef, useEffect } from "react";

export default function About() {
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

  const text = (
    <>
      <div
        className="relative"
        data-gradient={true}
        data-animate={true}
        style={{
          "--highlight": 4,
          "--spread": 4,
          "--primary": "#ffffff",
          "--secondary": "#606060",
        }}
      >
        <h1
          ref={headlineElement}
          className={`${nicky.className} font-thin leading-none bg-no-repeat headline text-5xl max-w-[290px]`}
        >
          I&apos;m glad you&apos;re here.
        </h1>
      </div>
      <p>My name is Peter, I&apos;m a senior full-stack dev at IBM.</p>
      <p className={nicky.className}>
        I enjoy being in the sun, a warm espresso early in the morning, and a
        nice cigar.
      </p>
      <p>
        Life has the most meaning when you&apos;re growing. Don&apos;t stop
        listening, failing, sloughing comfort, or learning. When you rest, you
        rust.
      </p>
      <p>
        If you&apos;re a dev, designer, CTO, or even if you&apos;ve never coded,
        feel free to reach out and ask anything you&apos;d like, I love meeting
        new people.
      </p>
      <p>See you in the mountains.</p>
      <h2 className={`text-right ${nicky.className} text-3xl italic`}>
        - Peter
      </h2>
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
          display: inline-block;
        }
      `}</style>
    </>
  );

  return (
    <>
      <div className="absolute z-20 hidden md:block">
        <TextScroller>{text}</TextScroller>
      </div>
      <div className="absolute z-20 md:hidden block w-80 h-[500px] textcontainer rounded-[12px] max-h-96 overflow-y-scroll p-6">
        {text}
      </div>
      <div className="absolute z-10 w-screen h-screen overflow-hidden flex justify-center">
        <CssSineWave />
      </div>
      <style jsx>{`
        .textcontainer {
          background: color-mix(in lch, #000000, #ffffff 2%);
          scrollbar-width: thin;
          scrollbar-color: var(--accent) transparent;
          display: flex;
          gap: 1rem;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}
