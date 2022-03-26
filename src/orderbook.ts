import { TradingPair } from "./classes/TradingPair";
import { cTable } from "console.table";

const DEXALOT_API = "https://api.dexalot-dev.com/api";
const spread = 10;

const main = async () => {
  const myPair = new TradingPair(DEXALOT_API, "TEAM1/AVAX");

  await myPair.init(false);
  let buyBook = await myPair.getBuyBook();
  let sellBook = await myPair.getSellBook();
  console.table(sellBook.sort((a, b) => (a.price < b.price ? a.price : b.price)));
  console.table(buyBook.sort((a, b) => (a.price > b.price ? a.price : b.price)));
};

main();
