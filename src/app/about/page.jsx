"use client";
import { CssSineWave } from "@/components/cssSineWave";
import { TextScroller } from "@/components/textScroller";

export default function About() {
  return (
    <>
      something something about me
      <div className="absolute z-20">
        <TextScroller />
      </div>
      <div className="absolute z-10">
        <CssSineWave />
      </div>
    </>
  );
}
