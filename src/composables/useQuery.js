import useButtons from "./useButtons.js";

export default function useQuery(bot) {
  // confifm passanger
  bot.callbackQuery("passanger-confirm", async (ctx) => {
    await ctx.deleteMessage();
    await ctx.reply(
      "Buyurtmangiz olindi. Shu yo'nalishdagi haydovchini kuting. Tez orada bog'lanishadi",
      {
        reply_markup: useButtons().menu(),
      }
    );
  });

  // decline passanger
  bot.callbackQuery("passanger-decline", async (ctx) => {
    await ctx.deleteMessage();
    await ctx.reply("Buyurtmangiz bekor qilindi", {
      reply_markup: useButtons().menu(),
    });
  });
}
