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
          className={`${nicky.className} lg:text-8xl md:text-5xl text-3xl p-2 text-shadow text-transparent text-stroke-6  before:content-['Hello,_Welcome'] before:absolute before:top-2 before:left-1 before:text-[rgba(43, 44, 45, 0.1)] before:text-shadow-lightred before:text-stroke-6 before:text-stroke-color-red after:content-['Hello,_Welcome'] after:absolute after:top-1 after:left-0 after:text-stroke-2 after:text-stroke-color-white80`}
        >
          Hello, Welcome
        </h1>
      </div>
      <div className="relative">
        <h2
          className={`${nicky.className} lg:text-8xl md:text-5xl text-3xl p-2 headline scale-flip opacity-50 lg:mt-[600px] md:mt-[400px] mt-[350px] text-shadow text-transparent text-stroke-6 text-stroke-color-white80 before:content-['Hello,_Welcome'] before:absolute before:top-0 before:left-0 before:text-[rgba(43, 44, 45, 0.1)] before:text-shadow-lightred before:text-stroke-6 before:text-stroke-color-red after:content-['Hello,_Welcome'] after:absolute after:top-0 after:left-0 after:text-stroke-2 after:text-stroke-color-white80`}
        >
          Hello, Welcome
        </h2>
      </div>
    </>
  );
}
