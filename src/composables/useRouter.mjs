import { Router } from "@grammyjs/router";

const router = new Router((ctx) => ctx.session.step);

// TODO: /services
const service = router.route("services");
service.on("message:text", async (ctx) => {
  const msg = ctx.message.text;

  ctx.session.step = "favourite";
  await ctx.reply("Your services is " + msg);
});
service.use((ctx) => ctx.reply("Please send me the service name"));

// TODO: /favourite
const favourite = router.route("favourite");
favourite.on("message:text", async (ctx) => {
  const msg = ctx.message.text;

  await ctx.reply("Your favourites is " + msg);
  ctx.session.step = "idle";
});
favourite.use((ctx) => ctx.reply("Please send me the favourite name"));

// router.otherwise(async (ctx) => {
//   await ctx.reply("Send /birthday to find out how long you have to wait.");
// });

export default router;
