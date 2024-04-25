import useCommands from "./useCommands.mjs";
import useMessages from "./useMessages.mjs";
import useQuery from "./useQuery.mjs";

export default function useMe(bot) {
  useCommands(bot);
  useMessages(bot);
  useQuery(bot);
}
