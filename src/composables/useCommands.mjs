import useButtons from "./useButtons.mjs";

// * Hooks
const btn = useButtons();

// * Commands
const commands = [
  {
    command: "start",
    description: "Start the bot",
  },
  {
    command: "services",
    description: "services",
  },
];

export default function useCommands(bot) {
  // bot.api.setMyCommands(commands);

  // TODO: /start
  bot.command("start", async (ctx) => {
    await ctx.reply("Assalamu alaykum", {
      reply_markup: btn.menu(),
    });
  });

  // TODO: /services
  bot.command("services", async (ctx) => {
    ctx.session.step = "services";
    await ctx.reply(
      "Hi! I can only read messages that explicitly reply to me!",
      {
        reply_markup: { force_reply: true },
      }
    );
  });

  // TODO: /favourite
  bot.command("favourite", async (ctx) => {
    ctx.session.step = "favourite";
    await ctx.reply(
      "Hi! I can only read messages that explicitly reply to me!",
      {
        reply_markup: { force_reply: true },
      }
    );
  });
}
