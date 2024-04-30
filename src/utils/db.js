import { Sequelize, DataTypes } from "sequelize";
import { configDotenv } from "dotenv";
import { USERS_MODEL } from "../models/user.js";
import { DRIVERS_MODEL } from "../models/driver.js";

configDotenv();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env["DB_HOST"] || "localhost",
  database: process.env["DB_NAME"],
  username: process.env["DB_USER"],
  password: process.env["DB_PASS"],
  logging: false,
});



export default async function () {
  try {

    await sequelize.authenticate();
    console.log("\x1b[42m%s\x1b[0m", " db connected! ");

    await USERS_MODEL({ sequelize });
    await DRIVERS_MODEL({ sequelize });
    console.log("models are loaded!");

    await sequelize.sync({ alter: true });
    console.log("models are syncronized!");

    return sequelize;
  } catch (error) {
    console.log(error);
    console.log("\x1b[41m%s\x1b[0m", " db isn't connected! ");
  }
}
