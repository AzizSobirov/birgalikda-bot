import { Bot, session, Composer } from "grammy";
import useRouter from "./composables/useRouter.mjs";
import useMe from "./composables/index.mjs";

export const token = process.env.TELEGRAM_BOT_TOKEN;
export const secretToken = String(token).split(":").pop();
export const bot = new Bot(token);

const composer = new Composer();
const initial = () => {
  return { step: "idle", admin: false };
};

bot.use(session({ initial }));
bot.use(useRouter);
bot.use(composer.use(useMe(bot)));
