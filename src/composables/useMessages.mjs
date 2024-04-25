import useButtons from "./useButtons.mjs";

// * Hooks
const btn = useButtons();

export default function useMessages(bot) {
  bot.on("message:text", async (ctx) => {
    const msg = ctx.message.text;

    if (msg === "👟 Yo'lovchi") {
      ctx.session.step = "passenger";
      ctx.reply("Ism familiyangiz yozing", {
        reply_markup: btn.cancelBtn,
      });
    }
  });
}
