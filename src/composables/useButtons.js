import { InlineKeyboard, Keyboard } from "grammy";

// * useString
const useString = (action, data) => {
  return JSON.stringify({ action: action, data: data });
};

// * Main Menu
const menu = (ctx) => {
  const menu = new Keyboard()
    .text("👟 Yo'lovchi")
    .row()
    .text("🚖 Haydovchi")
    .row()
    .text("☎️ Hamkorlik")
    .text("🖥 Biz haqimizda");

  return menu.resized();
};

// * Cancel button
const cancelBtn = new Keyboard().text("❌ Bekor qilish").resized();

const cooperation = new Keyboard()
  .text("Telefon")
  .text("Telegram")
  .row()
  .text("Whatsapp")
  .text("Elektron pochta")
  .row()
  .text("🏠 Bosh sahifa")
  .resized();

// * useButtons
export default function useButtons() {
  return {
    menu,
    cancelBtn,
    cooperation,
  };
}
