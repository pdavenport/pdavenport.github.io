import { CssSineWave } from "@/components/cssSineWave";
import { TextScroller } from "@/components/textScroller";
import { nicky } from "../fonts";
import { HeadlineRotation } from "@/components/headlineRotation";

export default function About() {
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
        <HeadlineRotation />
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
    </>
  );

  return (
    <>
      <div className="absolute z-20 hidden md:flex">
        <TextScroller>{text}</TextScroller>
      </div>
      <div className="backdrop-blur-sm absolute z-20 md:hidden flex w-80 textcontainer scrollbar-width-thin rounded-[12px] p-6 none top-20 md:top-auto max-h-[500px] overflow-y-scroll shadow-[inset_0_10px_25px_0px_rgba(255,255,255,0.2)] gap-4 flex-col">
        {text}
      </div>
      <div className="absolute z-10 w-screen h-screen overflow-hidden flex justify-center">
        <CssSineWave />
      </div>
    </>
  );
}
