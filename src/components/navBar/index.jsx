"use client";
import React from "react";
import { useEffect } from "react";
import { nicky } from "@/app/fonts";

export const Navbar = () => {
  const links = [{ href: "/", label: "Click Me" }];

  const startAnimations = () => {
    const lines = document.querySelectorAll(".line");
    for (let i = 0; i < lines.length; i++) {
      const animationName = `glitch${i}`;
      lines[i].style.animation = `clip 3000ms ${
        i * -300
      }ms linear infinite, ${animationName} 500ms ${
        Math.random() * 1000 * -1
      }ms linear infinite`;
    }
  };

  const stopAnimations = () => {
    const lines = document.querySelectorAll(".line");
    for (let i = 0; i < lines.length; i++) {
      lines[i].style.animation = "";
    }
  };

  useEffect(() => {
    const generateAnimations = () => {
      const lines = document.querySelectorAll(".line");
      for (let i = 0; i < lines.length; i++) {
        const animationName = `glitch${i}`;
        const animationCSS = `
        @keyframes ${animationName} {
          0%, 80%, 100% {
            transform: translateX(0);
            color: #fff;
          }
          85% {
            transform: translateX(${Math.random() * 10 - 5}px);
            color: #4e9a26;
          }
          90% {
            transform: translateX(${Math.random() * 10 - 5}px);
            color: #ac1212;
          }
          95% {
            transform: translateX(${Math.random() * 10 - 5}px);
            color: #fff;
          }
        }
      `;
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(animationCSS, styleSheet.cssRules.length);
      }
    };
    generateAnimations();
  }, []);

  return (
    <>
      <nav className="">
        <ul className="list-none flex gap-10">
          {links.map((link) => (
            <li
              key={link.href}
              onMouseOver={startAnimations}
              onMouseOut={stopAnimations}
            >
              <div className="hover:bg-black color-white block font-bold text-center decoration-none transition-all ease-in-out duration-250">
                <div className={`glitch ${nicky.className}`}>
                  {Array(9)
                    .fill()
                    .map((_, i) => (
                      <div key={link.label + i} className="line">
                        <p className="text-5xl p-2">{link.label}</p>
                      </div>
                    ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        body {
          background: repeating-linear-gradient(
            0deg,
            #0e0d0e 25%,
            #0e0d0e 50%,
            #171819 50%,
            #171819 75%
          );
          background-size: 10px 10px;
          height: 100vh;
          overflow: hidden;
          display: flex;
          font-family: "Barlow", sans-serif;
          justify-content: center;
          align-items: center;
        }

        .glitch {
          position: relative;
          color: #fff;
          font-size: 48px;
        }

        .line:not(:first-child) {
          position: absolute;
          top: 0;
          left: 0;
        }

        @keyframes clip {
          0% {
            clip-path: polygon(0 100%, 100% 100%, 100% 120%, 0 120%);
          }

          100% {
            clip-path: polygon(0 -20%, 100% -20%, 100% 0%, 0 0);
          }
        }
      `}</style>
    </>
  );
};
