import { InlineKeyboard, Keyboard } from "grammy";

// * useString
const useString = (action, data) => {
  return JSON.stringify({ action: action, data: data });
};

// * Main Menu
const menu = (ctx) => {
  const menu = new Keyboard().text("menu").row().text("menu2");

  // if (ctx.session.admin) {
  //   menu.row();
  //   menu.text(ctx.t("admin"));
  // }

  return menu.resized();
};

// * useButtons
export default function useButtons() {
  return {
    menu,
  };
}
