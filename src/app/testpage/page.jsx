var termkit = require("terminal-kit");
// import {
//   Rect,
//   ScreenBuffer,
//   ScreenBufferHD,
//   Terminal,
//   TextBuffer,
//   createTerminal,
//   getParentTerminalInfo,
//   getDetectedTerminal,
//   autoComplete,
//   stripEscapeSequences,
//   stringWidth,
//   truncateString,
// } from "terminal-kit";
// var term = require("terminal-kit").terminal;
var term = termkit.terminal;

// import { terminal as term } from "terminal-kit";

export default function test() {
  const textlol = "some text lol";
  return (
    <>
      <div className="w-[500px] h-[500px] bg-slate-500 m-auto">
        {" "}
        {term("hello world")}
      </div>
      {textlol}
    </>
  );
}
