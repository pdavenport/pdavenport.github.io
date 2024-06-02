import Image from "next/image";
import { nicky } from "../fonts";
import snowcityfar from "@public/snowcityfar.jpeg";

const email = [
  "p",
  "e",
  "t",
  "e",
  "r",
  "k",
  "d",
  "a",
  "v",
  "e",
  "n",
  "p",
  "o",
  "r",
  "t",
  "@",
  "p",
  "r",
  "o",
  "t",
  "o",
  "n",
  ".",
  "m",
  "e",
].join("");

const ContactPage = () => {
  return (
    <>
      <Image
        alt="City"
        src={snowcityfar}
        placeholder="blur"
        quality={10}
        className="object-cover w-full h-full absolute z-0"
      />
      <div className="max-h-screen flex flex-col gap-10 z-10 backdrop-blur-sm py-5 rounded-lg">
        <div className="mx-auto relative">
          <h2
            className={`${nicky.className} text-5xl text-transparent text-shadow before:text-shadow-lightred before:content-['How_to_find_me'] before:absolute before:top-0 before:left-0 before:text-transparent before:text-stroke-6 before:text-stroke-color-red after:content-['How_to_find_me'] after:absolute after:top-1 after:left-0 after:text-stroke-2 after:text-stroke-color-white80 text-center`}
          >
            How to find me
          </h2>
        </div>
        <div className="flex gap-2 flex-grow-0 flex-shrink-0 flex-wrap justify-center">
          <a href="https://www.linkedin.com/in/peter-davenport/">
            <Image
              src="https://img.shields.io/badge/LinkedIn-0077B5?logo=LinkedIn"
              alt="LinkedIn"
              width={75}
              height={20}
              unoptimized
            />
          </a>
          <a href="https://open.spotify.com/user/vcirnqg95vxscbiwrzw6bfd05">
            <Image
              src="https://img.shields.io/badge/Spotify-000000?logo=spotify"
              alt="Spotify"
              width={75}
              height={20}
              unoptimized
            />
          </a>
          <a href="https://twitter.com/PeterD61063">
            <Image
              src="https://img.shields.io/badge/Twitter-000000?logo=x"
              alt="Twitter"
              width={75}
              height={20}
              unoptimized
            />
          </a>
          <a href="https://github.com/pdavenport">
            <Image
              src="https://img.shields.io/badge/Github-000000?logo=github"
              alt="Github"
              width={75}
              height={20}
              unoptimized
            />
          </a>
          <a href={`mailto:${email}`}>
            <Image
              src="https://img.shields.io/badge/Email-000000?logo=proton"
              alt="Email"
              width={75}
              height={20}
              unoptimized
            />
          </a>
        </div>
        <a href="https://open.spotify.com/user/vcirnqg95vxscbiwrzw6bfd05">
          <Image
            src="https://readme-spotify-seven.vercel.app/api/spotify.py"
            alt="Spotify"
            width={480}
            height={133}
            unoptimized
          />
        </a>
      </div>
    </>
  );
};
export default ContactPage;
