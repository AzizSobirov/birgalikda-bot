import { InlineKeyboard } from "grammy";

export default function usePassanger(router) {
  //?? /passenger
  const passenger = router.route("passenger");
  passenger.on("message:text", async (ctx) => {
    ctx.session.step = "phone";
    ctx.session.user.name = ctx.message.text;
    await ctx.reply("Iltimos telefon raqamingizni yozing");
  });
  passenger.use((ctx) => ctx.reply("Iltimos ismingizni tog'ri kiriting"));

  //?? /phone
  const phone = router.route("phone");
  phone.on("message:text", async (ctx) => {
    ctx.session.step = "location";
    ctx.session.user.phone = ctx.message.text;
    await ctx.reply("Joriy manzilingizn \n(Urganch, Giper yoni)");
  });
  phone.use((ctx) => ctx.reply("Iltimos raqamingizni tog'ri kiriting"));

  //?? /location
  const location = router.route("location");
  location.on("message:text", async (ctx) => {
    ctx.session.step = "where";
    ctx.session.user.location = ctx.message.text;
    await ctx.reply("Qayerga bormoqchisiz \n(Hazorasp, Urganch styanka)");
  });
  location.use((ctx) => ctx.reply("Iltimos manzilingizni tog'ri kiriting"));

  //?? /where
  const where = router.route("where");
  where.on("message:text", async (ctx) => {
    ctx.session.step = "count";
    ctx.session.user.where = ctx.message.text;
    await ctx.reply("Yo'lovchilar soni \n(1 yoki 2)");
  });
  where.use((ctx) => ctx.reply("Iltimos manzilni tog'ri kiriting"));

  //?? /count passangers
  const count = router.route("count");
  count.on("message:text", async (ctx) => {
    ctx.session.step = "confirm";
    ctx.session.user.passengers = ctx.message.text;
    await ctx.reply("Qayerga bormoqchisiz \n(Hazorasp, Urganch styanka)");
  });
  count.use((ctx) => ctx.reply("Iltimos ma'lumotni tog'ri kiriting"));

  //?? /confirm
  const confirm = router.route("confirm");
  confirm.on("message:text", async (ctx) => {
    const user = ctx.session.user;
    ctx.session.step = "idle";

    const inlineKeyboard = new InlineKeyboard()
      .text("✅ Tasdiqlayman", "passanger-confirm")
      .text("❌ Bekor qilish", "passanger-decline");

    const msg = `
        Iltimos ma'lumotlaringizni tasdiqlang \n
        Ism: ${user.name}
        Telefon raqam: ${user.phone}
        Manzil: ${user.location}
        Qayerga : ${user.where}
        Yo'lovchilar soni: ${user.passengers}
  `;

    await ctx.reply(msg, {
      reply_markup: inlineKeyboard,
    });


    // await ctx.reply(
    //   "Buyurtmangiz olindi. Shu yo'nalishdagi haydovchini kuting. Tez orada bog'lanishadi"
    // );
  });

  // router.otherwise(async (ctx) => {
  //   await ctx.reply("Send /birthday to find out how long you have to wait.");
  // });
}
