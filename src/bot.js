import { Bot, session, Composer } from "grammy";
import { hydrateFiles } from "@grammyjs/files";
import useMe from "./composables/index.js";
import useButtons from "./composables/useButtons.js";
import routes from "./routes/index.routes.js";
import database from "./utils/db.js"

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new Bot(token);
bot.api.config.use(hydrateFiles(bot.token));

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
!(async function () {
  const db = await database();

  // app.use("/api/events", eventsRouter);
  // app.use("/api", resultsRouter);
  // app.use("/api/users", usersRouter);
  // app.use("/api/teachers", teachersRouter);
  // app.use("/api/upload", upload.single("image"), uploadRouter);

  const PORT = process.env["SERVER_PORT"] || 3000;

  // app.listen(PORT, () => console.log("listening on port ", PORT));
})();
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
