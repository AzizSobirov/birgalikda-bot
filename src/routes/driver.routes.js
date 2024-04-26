import { InlineKeyboard, Keyboard } from "grammy";
import useButtons from "../composables/useButtons.js";

export default function useDriver(router) {
  //?? /driver
  const driver = router.route("driver");
  driver.on("message:text", async (ctx) => {
    ctx.session.step = "phone_2";
    ctx.session.user.name = ctx.message.text;
    await ctx.reply("Iltimos telefon raqamingizni yozing (1 yoki 2ta)");
  });
  driver.use((ctx) => ctx.reply("Iltimos ismingizni tog'ri kiriting"));

  //?? /phone_2
  const phone_2 = router.route("phone_2");
  phone_2.on("message:text", async (ctx) => {
    ctx.session.step = "guvohnoma_old";
    ctx.session.user.phone_2 = ctx.message.text;
    await ctx.reply("Haydovchilik guvohnomasi foto surati old qismi)");
  });
  phone_2.use((ctx) => ctx.reply("Iltimos raqamingizni tog'ri kiriting"));

  //?? /guvohnoma_old
  const guvohnoma_old = router.route("guvohnoma_old");
  guvohnoma_old.on("message:text", async (ctx) => {
    ctx.session.step = "guvohnoma_orqa";
    // ctx.session.user.guvohnoma_old = ctx.message.text;
    await ctx.reply("Haydovchilik guvohnomasi foto surati old qismi)");
  });
  guvohnoma_old.use((ctx) =>
    ctx.reply("Iltimos manzilingizni tog'ri kiriting")
  );

  //?? /guvohnoma_orqa
  const guvohnoma_orqa = router.route("guvohnoma_orqa");
  guvohnoma_orqa.on("message:text", async (ctx) => {
    ctx.session.step = "tex_old";
    // ctx.session.user.guvohnoma_orqa = ctx.message.text;
    await ctx.reply("Tex pasport foto surati old qismi)");
  });
  guvohnoma_orqa.use((ctx) =>
    ctx.reply("Iltimos manzilingizni tog'ri kiriting")
  );

  //?? /tex_old
  const tex_old = router.route("tex_old");
  tex_old.on("message:text", async (ctx) => {
    ctx.session.step = "tex_orqa";
    // ctx.session.user.tex_old = ctx.message.text;
    await ctx.reply("Tex pasport foto surati orqa qismi)");
  });
  tex_old.use((ctx) => ctx.reply("Iltimos manzilingizni tog'ri kiriting"));

  //?? /tex_orqa
  const tex_orqa = router.route("tex_orqa");
  tex_orqa.on("message:text", async (ctx) => {
    ctx.session.step = "passport";
    // ctx.session.user.tex_orqa = ctx.message.text;
    await ctx.reply("Shaxsiy pasport yoki ID karta foto surati");
  });
  tex_orqa.use((ctx) => ctx.reply("Iltimos manzilingizni tog'ri kiriting"));

  //?? /passport
  const passport = router.route("passport");
  passport.on("message:text", async (ctx) => {
    ctx.session.step = "sugurta";
    // ctx.session.user.passport = ctx.message.text;
    await ctx.reply("Avtomobil transport sug'urtasi");
  });
  passport.use((ctx) => ctx.reply("Iltimos manzilingizni tog'ri kiriting"));

  //?? /sugurta
  const sugurta = router.route("sugurta");
  sugurta.on("message:text", async (ctx) => {
    ctx.session.step = "nomida";
    // ctx.session.user.sugurta = ctx.message.text;
    await ctx.reply("Avto transport vositasi kimning nomida", {
      reply_markup: new Keyboard()
        .text("Meni")
        .row()
        .text("Bobo")
        .text("Buvi")
        .row()
        .text("Ota")
        .text("Ona")
        .row()
        .text("Aka-Uka")
        .text("Opa-Singil")
        .row()
        .text("❌ Bekor qilish")
        .resized(),
    });
  });
  sugurta.use((ctx) => ctx.reply("Iltimos manzilingizni tog'ri kiriting"));

  //?? /nomida
  const nomida = router.route("nomida");
  nomida.on("message:text", async (ctx) => {
    if (ctx.message.text == "Meni") {
      ctx.session.step = "idle";
      ctx.reply(
        "Hurmatli haydovchi hujjatlaringiz operatorlar tomonidan ko'rib chiqilib, tez orada siz bilan bog'lanishadi.",
        {
          reply_markup: useButtons().menu(),
        }
      );
      ctx.reply("Ishonchingiz uchun raxmat. Hamisha birgalikda");
    } else {
      ctx.session.step = "ishonchnoma";
      await ctx.reply(
        "Avto transportni boshqarish uchun ishonchnoma (Davernes) foto surati",
        {
          reply_markup: new Keyboard().text("❌ Bekor qilish").resized(),
        }
      );
    }
  });
  nomida.use((ctx) => ctx.reply("Iltimos manzilingizni tog'ri kiriting"));

  //?? /ishonchnoma
  const ishonchnoma = router.route("ishonchnoma");
  ishonchnoma.on("message:text", async (ctx) => {
    ctx.session.step = "idle";
    ctx.reply(
      "Hurmatli haydovchi hujjatlaringiz operatorlar tomonidan ko'rib chiqilib, tez orada siz bilan bog'lanishadi.",
      {
        reply_markup: useButtons().menu(),
      }
    );
    ctx.reply("Ishonchingiz uchun raxmat. Hamisha birgalikda");
  });
  ishonchnoma.use((ctx) => ctx.reply("Iltimos manzilni tog'ri kiriting"));
}
