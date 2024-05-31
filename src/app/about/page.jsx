"use client";
import { CssSineWave } from "@/components/cssSineWave";
import { TextScroller } from "@/components/textScroller";
import { nicky } from "../fonts";

const Text = () => (
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
        className={`${nicky.className} font-thin leading-none bg-no-repeat headline`}
      >
        I&apos;m glad you&apos;re here.
      </h1>
    </div>
    <p>My name is Peter, I&apos;m a senior full-stack dev at IBM.</p>
    <p className={nicky.className}>
      I enjoy being in the sun, a warm espresso early in the morning, and a nice
      cigar.
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
    <h2 className={`text-right ${nicky.className} text-3xl italic`}>- Peter</h2>
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
        font-size: clamp(2rem, 1rem + 3vw, 10rem);
        display: inline-block;
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
          animation: rotate 10s infinite linear;
        }
      }
    `}</style>
  </>
);

export default function About() {
  return (
    <>
      <div className="absolute z-20">
        <TextScroller>
          <Text />
        </TextScroller>
      </div>
      <div className="absolute z-10 w-screen h-screen overflow-hidden flex justify-center">
        <CssSineWave />
      </div>
    </>
  );
}
