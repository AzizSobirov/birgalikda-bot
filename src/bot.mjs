import { Bot, session, Composer } from "grammy";
import useRouter from "./composables/useRouter.mjs";
import useMe from "./composables/index.mjs";
import useButtons from "./composables/useButtons.mjs";

export const token = process.env.TELEGRAM_BOT_TOKEN;
export const secretToken = String(token).split(":").pop();
export const bot = new Bot(token);

const composer = new Composer();
const initial = () => {
  return {
    step: "idle",
    user: {
      name: "",
      phone: "",
      location: "",
      where: "",
      passengers: "",
    },
  };
};

bot.use(session({ initial }));
bot.hears("❌ Bekor qilish", async (ctx) => {
  ctx.session.step = "idle";
  ctx.reply("Bekor qilindi", {
    reply_markup: useButtons().menu(),
  });
});
bot.use(useRouter);
bot.use(composer.use(useMe(bot)));
