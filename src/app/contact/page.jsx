import Image from "next/image";
import { nicky } from "../fonts";
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
      <h2 className={`${nicky.className} mt-32 text-5xl mx-auto text-center`}>
        How to find me
      </h2>
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
    </>
  );
};
export default ContactPage;
