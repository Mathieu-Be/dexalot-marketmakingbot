import { exit } from "process";
import { TradingPair } from "./classes/TradingPair";
import { Settings } from "./settings";
import { sleep } from "./utils/sleep";
import dotenv from "dotenv";
dotenv.config();

let hasExited = false;

const main = async () => {
  // TradindPair creation
  const myPair = new TradingPair("TEAM1/AVAX", process.env.BOT_PRIVATE_KEY);

  // TradingPair initalisation
  // All event listeners are created
  await myPair.init();

  // Closing every position on volontary exit ^C
  process.on("SIGINT", async () => {
    // Prevent double triggers of the event
    if (!hasExited) {
      myPair.TradePairs.removeAllListeners();
      hasExited = true;
      console.log();
      await myPair.cancelAllOrders();
      await sleep(5);
      exit(0);
    }
  });

  // Temporal loop to update position from time to time if orders are never filled
  while (true) {
    await sleep(Settings.refresh_rate);
    console.log("Updating strategy...");
    await myPair.updateOrders();
  }
};

// For the ^C event
process.stdin.resume();

main().then(() => exit(0));
