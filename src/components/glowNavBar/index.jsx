"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { nicky } from "@/app/fonts";
import { palmore } from "@/app/fonts";

const homeGlow = `conic-gradient(
from 90deg at 50% 50%, 
#ffa500, #ff8d00, #ff7600, 
#ff5e00, #ff4700, #ff2f00, 
#ff1800, #ff0000)
50% 50% / 200% 200% border-box;`;
const aboutGlow = `conic-gradient(
from var(--angle, 0deg) in hsl longer hue,
hsl(10 90% 70%),
hsl(10 90% 70%)
)
50% 50% / 200% 200% border-box;`;
const projectsGlow = `conic-gradient(
  from 90deg at 50% 50%, 
  #f72119, #f81b14, #f91610, 
  #fa100b, #fb0a06, #fc0502, 
  #f90201, #f70000)
50% 50% / 200% 200% border-box;`;
const contactGlow = `conic-gradient(
from var(--angle, 0deg) in hsl longer hue,
hsl(10 90% 70%),
hsl(10 90% 70%)
)
50% 50% / 200% 200% border-box;`;

const homeShadow = `0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500,
0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00,
0 0 98px #ff0000;`;
const aboutShadow = `0 0 5px #d400ff, 0 0 15px #7171ff, 0 0 20px #009dff,
0 0 40px #00bcff, 0 0 60px #00d3ff, 0 0 10px #00e5ff,
0 0 98px #00f3f3;`;
const projectsShadow = `0 0 5px #f72119, 0 0 15px #f72119, 0 0 20px #f72119,
0 0 40px #f72119, 0 0 60px #f72119, 0 0 10px #f72119,
0 0 98px #f72119`;
const contactShadow = `0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500,
0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00,
0 0 98px #ff0000;`;

export const GlowNavBar = () => {
  const path = usePathname();

  const links = [
    { href: "/", label: "Home", glow: homeGlow, shadow: homeShadow },
    { href: "/about", label: "About Me", glow: aboutGlow, shadow: aboutShadow },
    {
      href: "/projects",
      label: "Projects",
      glow: projectsGlow,
      shadow: projectsShadow,
    },
    {
      href: "/contact",
      label: "Contact",
      glow: contactGlow,
      shadow: contactShadow,
    },
  ];

  const currentGlow = links.find((link) => link.href === path)?.glow;
  const currentShadow = links.find((link) => link.href === path)?.shadow;

  return (
    <>
      <nav className="absolute top-0 z-50 mt-5 left-0 right-0">
        <ul className="list-none w-full flex md:gap-10 flex-wrap md:justify-center justify-around">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="color-white block text-center decoration-none transition-all ease-in-out duration-250"
              >
                <span
                  className={`font-thin text-white ${
                    path === link.href && "textglow"
                  } text-sm lg:text-3xl neon bg-black bg-opacity-75 rounded p-2 border-2 border-solid border-transparent cursor-pointer relative`}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        .neon {
          --angle: 0deg;
        }
        .neon:hover {
          background: linear-gradient(#000, #000) padding-box,
            linear-gradient(#000 40%, transparent 60%) border-box,
            ${currentGlow};
        }

        .neon::before {
          content: "";
          height: calc(50% + (2 * 1px));
          width: calc(100% + (2 * 2px));
          position: absolute;
          left: 50%;
          top: var(--position, 25%);
          translate: -50% 0;
          z-index: -1;
          background: ${currentGlow};
          border-radius: 50% 50% 12px 12px / 20px 20px 12px 12px;
          filter: blur(calc(10 * 1px)) brightness(calc(1.25));
          scale: calc((0.5 + (var(--intent, 0) * 0.46)) - var(--active, 0));
          transition: scale 0.25s;
        }

        .neon::after {
          content: "";
          position: absolute;
          inset: calc(2 * -1px);
          pointer-events: none;
          border: calc(2 * 1px) solid hsl(0 0% 0% / 0.3);
          opacity: calc(1 - var(--intent, 0));
          transition: opacity 0.25s;
        }

        .neon:is(:hover, :focus-visible) {
          --intent: 1;
          outline: none;
          --position: 50%;
        }
        .neon:active {
          --active: 1;
        }

        div.tp-dfwv {
          width: 280px;
        }

        .textglow {
          text-shadow: ${currentShadow};
        }
      `}</style>
    </>
  );
};
