import Link from "next/link";
import { CssSineWave } from "../cssSineWave";
import { FlickerTest } from "../flickerTest";
import { MaskedText } from "../maskedText";
import { Navbar } from "../navBar";
import Image from "next/image";

// TODO: add stop snow button

export const ProjectsScroller = () => {
  return (
    <>
      <div className="backdrop-blur w-screen h-[500px] md:w-[500px] z-30 overflow-y-scroll rounded-lg md:px-5 px-0 md:shadow-[inset_0_10px_25px_0px_rgba(0,0,0,0.8)] scrollbar-width-thin">
        <div id="bestintravel" />
        <h2 className="text-3xl font-thin text-center mt-10">Best In Travel</h2>
        <h3 className="text-xl font-thin text-center mb-2">-Lonely Planet</h3>

        <video
          width="320"
          height="240"
          controls
          preload="none"
          className="mx-auto"
          poster="/bestintravelpreview.PNG"
        >
          <source src="/bestintravel.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <p className="my-10 mx-6">
          Best In Travel was a solo project I built for Lonely Planet/Red
          Ventures. This one was extra stressful (fun) due to a complete
          redesign about 3 months before the launch date. It&apos;s intention
          was to have lots of little &quot;pops&quot; and pizazz user
          interactions. I was able to make use of many parallax images, both
          horizontal and vertical which was great; lots of scroll interactions.
          That year&apos;s campain won two webby awards!
        </p>

        <hr />

        <div id="terminaladdiction" />
        <h2 className="text-3xl font-thin text-center mt-10">
          Terminal Addiction
        </h2>
        <h3 className="text-xl font-thin text-center mb-2">-personal</h3>
        <Image
          alt="terminalPreview"
          src={"/terminalPreview.PNG"}
          quality={50}
          className="object-cover z-0 mt-5 mx-auto max-w-80"
          width={320}
          height={248}
        />

        <Link
          href="/projects/terminal"
          className="mt-5 justify-center text-black bg-red-500 max-w-max px-2 mx-auto rounded hover:animate-pulse transition-all hover:border-white border-2 border-black"
        >
          Demo (Desktop only)
        </Link>
        <p className="my-10 mx-6">
          This project was my attempt at replicating a terminal interface. It
          ended up being (basically) a text area and text input component with a
          massive amount of logic handlers. Originally, this was going to be my
          website, although I thought it ended up being too confusing for the
          average user. I&apos;d still like to add some hidden easter eggs.
        </p>

        <hr />

        <div id="studymatch" />
        <h2 className="text-3xl font-thin text-center mt-10">Study Match</h2>
        <h3 className="text-xl font-thin text-center mb-2">-Red Ventures</h3>
        <Image
          alt="studymatch"
          src={"/studymatch.PNG"}
          quality={50}
          width={320}
          height={156}
          className="object-cover z-0 mt-5 mx-auto max-w-80"
        />
        <a
          href="https://college.bestcolleges.com/app/experience/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 justify-center text-black bg-red-500 w-20 mx-auto rounded hover:animate-pulse transition-all hover:border-white border-2 border-black"
        >
          Visit
        </a>
        <p className="my-10 mx-6">
          This app was a bit of a challenge. We had to reach out to an API
          &quot;decision engine&quot; to request data before each render on the
          page, which really stretched our use of NextJs to the limit. This is
          where I first grew to enjoy working with NextJs.
        </p>

        <hr />

        <h2 className="text-3xl font-thin text-center mt-10">EXPERIMENTS</h2>
        <p className="text-center">
          These are components that I&apos;ve used around this site or just
          goofed around with and decided to place here as a bit of a portfolio.
          Non-exhaustive, I&apos;ll be adding to this here and there.
        </p>

        <div id="spotify" />
        <h2 className="text-3xl font-thin text-center mt-10">Spotify Status</h2>
        <h3 className="text-xl font-thin text-center mb-2">-personal</h3>
        <div className="mt-5 mx-auto overflow-hidden">
          <a href="https://open.spotify.com/user/vcirnqg95vxscbiwrzw6bfd05">
            <Image
              src="https://readme-spotify-seven.vercel.app/api/spotify.py"
              alt="Spotify"
              width={375}
              height={133}
              unoptimized
              className="mx-auto"
            />
          </a>
        </div>
        <p className="my-10 mx-6">
          This ended up giving me some great experience on deploying with Vercel
          and how easy it is. Just a simple python script to fetch the currently
          playing song from the Spotify API. You can find the repo in my github.
        </p>

        <hr />

        <div id="csssinewave" />
        <h2 className="text-3xl font-thin text-center mt-10">CSS Sine Waves</h2>
        <h3 className="text-xl font-thin text-center mb-2">-personal</h3>
        <div className="w-[300px] h-[300px] mt-5 mx-auto overflow-hidden">
          <CssSineWave />
        </div>
        <p className="my-10 mx-6">
          Visit the about page to see it in it&apos;s full glory. This was
          derived from{" "}
          <a
            href="https://x.com/jh3yy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 inline-block"
          >
            Jhey
          </a>
          . Huge fan of Jhey, please check out his work and codepens. This one
          is a series of square divs that have an animation delay controlled by
          a sin calculation.
        </p>

        <hr />

        <div id="flickereffect" />
        <h2 className="text-3xl font-thin text-center mt-10">Flicker Effect</h2>
        <h3 className="text-xl font-thin text-center mb-2">-personal</h3>
        <div className="flex justify-center flex-col h-[150px] text-center m-auto overflow-hidden">
          <FlickerTest />
        </div>
        <p className="my-10 mx-6">
          Achieved via an SVG clip mask, before and after pseudo elements, and a
          little bit of animation. Too janky for my liking.
        </p>

        <hr />

        <div id="snoweffect" />
        <h2 className="text-3xl font-thin text-center mt-10">Snow Effect</h2>
        <h3 className="text-xl font-thin text-center mb-2">-personal</h3>

        <p className="my-10 mx-6">
          Pictured in the background, this idea started as an attempt to make a
          &quot;rain hitting the window&quot; effect. Unfortunately the logic
          for this is incredibly difficult to figure out (not the rain drops
          themselves but the merging of drops and streaking down the window). I
          did find an incredibly{" "}
          <a
            href="https://codepen.io/Bupeldox/pen/qBVPYMY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 inline-block"
          >
            well built sim
          </a>{" "}
          but attempting to convert it to JSX wasn&apos;t worth the squeeze. The
          snow effect on the other hand was a great way to learn{" "}
          <a
            href="https://pixijs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 inline-block"
          >
            PixiJS,
          </a>{" "}
          <a
            href="https://gsap.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 inline-block"
          >
            GSAP
          </a>
          , and how best to blend the two. The snowflakes are a PixiJS particle
          container where each snowflake is a sprite. The individual snowflakes
          are animated with GSAP.
        </p>

        <hr />

        <div id="maskedtext" />
        <h2 className="text-3xl font-thin text-center mt-10">Masked Text</h2>
        <h3 className="text-xl font-thin text-center mb-2">-personal</h3>
        <div className="flex justify-center flex-col max-h-max text-center m-auto overflow-hidden">
          <MaskedText />
        </div>
        <p className="my-10 mx-6">
          This is a concical gradient background rotating behind some clip
          masked text. This originally was from @Jhey but animating css
          variables in gradients isn&apos;t well supported on firefox. To
          support this effect on firefox I used JS to increment the angle
          variable and then update it via &quot;requestAnimationFrame&quot;.
        </p>

        <hr />

        <div id="glitcheffect" />
        <h2 className="text-3xl font-thin text-center mt-10">Glitch Effect</h2>
        <h3 className="text-xl font-thin text-center mb-2">-personal</h3>
        <div className="flex justify-center flex-col h-[200px] text-center m-auto overflow-hidden items-center">
          <Navbar />
        </div>
        <p className="my-10 mb-10 mx-6">
          A cool effect, but kinda hard to look at. Maybe better suited slowed
          down, or for something that&apos;s not a CTA.
        </p>

        <hr />
      </div>
    </>
  );
};
