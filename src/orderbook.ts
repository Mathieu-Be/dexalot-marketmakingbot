import { TradingPair } from "./classes/TradingPair";
import { sleep } from "./utils/sleep";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const myPair = new TradingPair("TEAM1/AVAX", process.env.BOT_PRIVATE_KEY);
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
