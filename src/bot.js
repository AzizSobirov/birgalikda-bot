import { Bot, session, Composer } from "grammy";
import useMe from "./composables/index.js";
import useButtons from "./composables/useButtons.js";
import routes from "./routes/index.routes.js";

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new Bot(token);

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
bot.use(routes);
bot.use(composer.use(useMe(bot)));
bot.start();
