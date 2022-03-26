import { TradingPair } from "./classes/TradingPair";
import { cTable } from "console.table";

const DEXALOT_API = "https://api.dexalot-dev.com/api";
const spread = 10;

const main = async () => {
  const myPair = new TradingPair(process.env.DEXALOT_API, "TEAM1/AVAX", process.env.BOT_PRIVATE_KEY);
  await myPair.init(false);
  await myPair.sellOrder(22, 10);
};

main();
