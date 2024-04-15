export default function useMessages(bot) {
  bot.on("message:text", async (ctx) => {
    const msg = ctx.message.text;

    if (msg === "menu") {
      ctx.reply("Hi! I can ");
    } else {
      ctx.reply("send me /menu");
    }
  });
}
