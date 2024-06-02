import Image from "next/image";
import snowjapan1 from "@public/snowjapan1.jpeg";
import { AnchorNavBar } from "@/components/anchorNavBar";
import { nicky } from "@/app/fonts";
import { ProjectsScroller } from "@/components/projectsScroller";
import { SnowflakeCanvas } from "@/components/snowflakeCanvas";

export default function ProjectsPage() {
  return (
    <>
      <Image
        alt="City"
        src={snowjapan1}
        placeholder="blur"
        quality={70}
        className="object-cover w-full h-full absolute z-0"
      />
      <SnowflakeCanvas />
      <div className="absolute md:z-0 z-40 md:top-32 top-20">
        <h1
          className={`md:text-8xl text-5xl headline text-shadow-red p-2 ${nicky.className} text-transparent text-stroke-6 text-stroke-color-darkgray before:content-['Projects'] before:absolute before:top-0 before:left-0 before:text-shadow-lightred before:text-stroke-6 before:text-stroke-color-red after:content-['Projects'] after:absolute after:top-0 after:left-0 after:text-stroke-2 after:text-stroke-color-white80`}
        >
          Projects
        </h1>
      </div>
      <div className="absolute md:relative bottom-0 flex gap-10 md:flex-row flex-col mt-20 max-h-screen overflow-hidden">
        <div className="md:z-40 bg-black rounded-lg anchornav hidden md:block">
          <AnchorNavBar />
        </div>
        <ProjectsScroller />
      </div>
    </>
  );
}
