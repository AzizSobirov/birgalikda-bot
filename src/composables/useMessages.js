import useButtons from "./useButtons.js";

// * Hooks
const btn = useButtons();

export default function useMessages(bot) {
  bot.hears("👟 Yo'lovchi", async (ctx) => {
    ctx.session.step = "passenger";
    ctx.reply("Ism familiyangiz yozing", {
      reply_markup: btn.cancelBtn,
    });
  });

  bot.hears("🚖 Haydovchi", async (ctx) => {
    ctx.session.step = "driver";
    ctx.reply("Biz bilan ishlayotganingiz uchun rahmat", {
      reply_markup: btn.cancelBtn,
    });
    ctx.reply("Ism familiyangiz yozing");
  });

  bot.hears("☎️ Hamkorlik", async (ctx) => {
    ctx.reply("Siz bilan hamkorlik qilishdan mamnunmiz", {
      reply_markup: btn.cooperation,
    });
    ctx.reply("Qulay aloqa turini tanlang");
  });

  bot.hears("Telefon", async (ctx) => {
    ctx.reply(
      "Agar siz bilan bog'lana olmasak boshqa aloqa turini tanlashingiz mumkin"
    );
    ctx.reply("Tel: 330039070");
  });

  bot.hears("Telegram", async (ctx) => {
    ctx.reply(
      "Agar siz bilan bog'lana olmasak boshqa aloqa turini tanlashingiz mumkin"
    );
    ctx.reply("t.me/birgalikda_admin");
  });

  bot.hears("Whatsapp", async (ctx) => {
    ctx.reply(
      "Agar siz bilan bog'lana olmasak boshqa aloqa turini tanlashingiz mumkin"
    );
    ctx.reply("330039070");
  });

  bot.hears("Elektron pochta", async (ctx) => {
    ctx.reply(
      "Agar siz bilan bog'lana olmasak boshqa aloqa turini tanlashingiz mumkin"
    );
    ctx.reply("birgalikda@gmail.com");
  });

  bot.hears("🏠 Bosh sahifa", async (ctx) => {
    ctx.reply("Bosh sahifa", {
      reply_markup: btn.menu(),
    });
  });

  bot.on("message:text", async (ctx) => {});
}
