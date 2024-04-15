import useCommands from "./useCommands.mjs";
import useMessages from "./useMessages.mjs";

export default function useMe(bot) {
  useCommands(bot);
  useMessages(bot);
}
