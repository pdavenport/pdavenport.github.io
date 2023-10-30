"use client";
import { useState, useRef, useEffect } from "react";
import { asciiFlower, asciiMoon } from "@public/ascii";
import { handleInput } from "@utils/handleInput";

export default function TestPage() {
  const [responses, setResponses] = useState(Array(29).fill(""));
  const [currentPage, setCurrentPage] = useState("~");
  const textareaRef = useRef(null);
  const inputRef = useRef(null);

  // handles input from user
  const handleCommand = (event) => {
    if (event.key === "Enter") {
      const command = event.target.value;
      setResponses(handleInput(command, currentPage, responses));
      event.target.value = "";
    }
  };

  // handles click on textarea
  const handleTextareaClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // handles scrolling to bottom of textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop =
        textareaRef.current.scrollHeight - textareaRef.current.clientHeight;
    }
  }, []);

  // handles scrolling to bottom of textarea when responses are added
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop =
        textareaRef.current.scrollHeight - textareaRef.current.clientHeight;
    }
  }, [responses]);

  return (
    <div className="flex flex-col text-green-500 border-[2.75px] border-green-500 m-10 p-6 absolute h-[calc(100%-88px)] w-[calc(100%-88px)] bg-[url('/public/images/grid.png')]">
      <textarea
        ref={textareaRef}
        value={responses.join("\n")}
        readOnly
        className="text-green-500 border-none font-mono text-lg w-full overflow-hidden h-full outline-none"
        style={{ resize: "none" }}
        onClick={handleTextareaClick}
      />
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder=""
          className="text-green-500 border-none font-mono text-lg py-1 w-full outline-none"
          onKeyDown={handleCommand}
        />
      </div>
    </div>
  );
}
