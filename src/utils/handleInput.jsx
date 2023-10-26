import { allCommands, directories } from "@constants/termConstants";
export const handleInput = (command, currentPage, responses) => {
  const commandArray = command.split(" ");
  const primaryCommand = commandArray[0];
  const secondaryCommand = commandArray[1];
  const emptyScreen = Array(29).fill("");

  switch (primaryCommand) {
    case "help":
      return [...responses, "commands:", ...allCommands];
    case "cd":
      // emulate cd command once there are more directories
      break;
    case "ls":
      // todo: return files in current directory
      break;
    case "pwd":
      // print working directory
      if (currentPage === "~") {
        return [...responses, "~/"];
      }
      return ["~/", currentPage];
    case "mkdir":
      // make directory
      break;
    case "rmdir":
      // remove directory
      break;
    case "rm":
      // remove file
      break;
    case "mv":
      // move file
      break;
    case "cp":
      // copy file
      break;
    case "cat":
      // print file contents
      break;
    case "less":
      // print file contents one page at a time
      break;
    case "find":
      // find file
      break;
    case "clear":
      return emptyScreen;
    default:
      return (responses) => [...responses.slice(1), command];
  }
};
