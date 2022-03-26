import { TradingPair } from "./classes/TradingPair";
import { cTable } from "console.table";
import { sleep } from "./utils/sleep";
import chalk from "chalk";

const DEXALOT_API = "https://api.dexalot-dev.com/api";
const spread = 10;

const main = async () => {
  const myPair = new TradingPair(
    DEXALOT_API,
    "TEAM1/AVAX",
    "0x49b5635429cb8a08341aef4263c761e64b056c2e9c9a054316bafd04d5a9a44a"
  );
  await myPair.init(false);
  while (true) {
    let buyBook = await myPair.getBuyBook();
    let sellBook = await myPair.getSellBook();

    console.clear();

    console.log(chalk.red("SELL ORDERS"));
    console.table(sellBook.sort((a, b) => (a.price < b.price ? a.price : b.price)));

    console.log(chalk.green("BUY ORDERS"));
    console.table(buyBook.sort((a, b) => (a.price > b.price ? a.price : b.price)));

    sleep(1);
  }
};

main();
