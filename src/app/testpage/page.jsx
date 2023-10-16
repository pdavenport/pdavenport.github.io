"use client";
import { useState, useRef, useEffect } from "react";
import { asciiFlower, asciiMoon } from "@public/ascii";

export default function TestPage() {
  // const [responses, setResponses] = useState(Array(29).fill(""));
  const [responses, setResponses] = useState(Array(29).fill(""));
  const textareaRef = useRef(null);
  const inputRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);

  const handleCommand = (event) => {
    if (event.key === "Enter") {
      const command = event.target.value;
      if (command === "clear") {
        setResponses(Array(29).fill(""));
      } else {
        // TODO: Handle the command and set the response
        setResponses((prevResponses) => [...prevResponses.slice(1), command]);
      }
      event.target.value = "";
    }
  };

  const handleTextareaClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop =
        textareaRef.current.scrollHeight - textareaRef.current.clientHeight;
    }
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop =
        textareaRef.current.scrollHeight - textareaRef.current.clientHeight;
    }
  }, [responses]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{ height: "calc(100% - 88px)", width: "calc(100% - 88px)" }}
      className="flex flex-col h-screen text-green-500 border border-green-500 m-10 p-6 absolute w-screen"
    >
      <textarea
        ref={textareaRef}
        value={responses.join("\n")}
        readOnly
        className="bg-black text-green-500 border-none font-mono text-lg w-full overflow-hidden h-full outline-none"
        style={{ resize: "none" }}
        onClick={handleTextareaClick}
      />
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder=""
          className="bg-black text-green-500 border-none font-mono text-lg py-1 w-full outline-none"
          onKeyDown={handleCommand}
        />
        {/* <div
          className={`absolute left-0 top-0 bottom-0 flex items-center pr-2 ${
            showCursor ? "opacity-100" : "opacity-0"
          }`}
        >
          |
        </div> */}
      </div>
    </div>
  );
}
