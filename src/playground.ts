import { TradingPair } from "./classes/TradingPair";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const myPair = new TradingPair("TEAM1/AVAX", process.env.BOT_PRIVATE_KEY);
  await myPair.init(false);
  await myPair.sellOrder(15, 10);
  await myPair.buyOrder(15, 10);
};

main();
