import { Router } from "@grammyjs/router";
import useDriver from "./driver.routes.js";
import usePassanger from "./passanger.routes.js";

const router = new Router((ctx) => ctx.session.step);

useDriver(router);
usePassanger(router);

export default router;
