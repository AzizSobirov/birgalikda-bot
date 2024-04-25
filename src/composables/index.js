import useCommands from "./useCommands.js";
import useMessages from "./useMessages.js";
import useQuery from "./useQuery.js";

export default function useMe(bot) {
  useCommands(bot);
  useMessages(bot);
  useQuery(bot);
}
