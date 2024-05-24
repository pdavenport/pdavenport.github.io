import { allCommands, directories } from "@constants/termConstants";

////// TODO:
// handle passing "cd" with no arguments
// handle xss vulnerabilities

const handleHelpCommands = (responses, terminalPrompt) => [
  ...responses,
  `${terminalPrompt} commands:`,
  ...allCommands,
];
const handleChangeDirectory = (secondaryCommand, responses, terminalPrompt) => {
  if (secondaryCommand === "..") {
    return [`${terminalPrompt} ~`, ...responses];
  }
  // Implement more directory change logic here
};
const handleListDirectories = (responses, terminalPrompt) => [
  ...responses,
  `${terminalPrompt} directories:`,
  ...directories,
];
const handlePrintWorkingDirectory = (
  currentPage,
  responses,
  terminalPrompt
) => {
  if (currentPage === "~") {
    return [...responses, `${terminalPrompt} ~/`];
  }
  return [`${terminalPrompt} ~/`, currentPage];
};
const handleClearScreen = () => Array(29).fill("");
const handleDefaultCommand = (command, responses, terminalPrompt) => [
  ...responses.slice(1),
  `${terminalPrompt} ${command}`,
];

export const handleInput = (
  command,
  currentPage,
  responses,
  terminalPrompt
) => {
  const commandArray = command.split(" ");
  const primaryCommand = commandArray[0];
  const secondaryCommand = commandArray[1];

  switch (primaryCommand) {
    case "help":
    case "commands":
      return handleHelpCommands(responses, terminalPrompt);
    case "cd":
      return handleChangeDirectory(secondaryCommand, responses, terminalPrompt);
    case "ls":
      return handleListDirectories(responses, terminalPrompt);
    case "pwd":
      return handlePrintWorkingDirectory(
        currentPage,
        responses,
        terminalPrompt
      );
    case "clear":
      return handleClearScreen();
    default:
      return handleDefaultCommand(command, responses, terminalPrompt);
  }
};
