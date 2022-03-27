import { TradingPair } from "./classes/TradingPair";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const myPair = new TradingPair("TEAM1/AVAX", process.env.BOT_PRIVATE_KEY);
  await myPair.init(false);
  await myPair.cancelAllOrders();

  const myPair2 = new TradingPair("TEAM1/AVAX", process.env.TRADER_PRIVATE_KEY);
  await myPair2.init(false);
  await myPair2.cancelAllOrders();
};

main();
