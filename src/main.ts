import { exit } from "process";
import { TradingPair } from "./classes/TradingPair";
import { Settings } from "./settings";
import { sleep } from "./utils/sleep";

const DEXALOT_API = "https://api.dexalot-dev.com/api";
const spread = 10;
let hasExited = false;

const main = async () => {
  const myPair = new TradingPair(DEXALOT_API, "TEAM1/AVAX");

  await myPair.init();

  process.on("SIGINT", async () => {
    if (!hasExited) {
      hasExited = true;
      console.log();
      await myPair.cancelAllOrders();
      myPair.TradePairs.removeAllListeners();
      return;
    }
  });

  while (true) {
    await sleep(Settings.refresh_rate);
    if (!myPair.isUpdatingOrders) {
      console.log("Updating strategy...");
      myPair.isUpdatingOrders = true;
      await myPair.updateOrders();
      myPair.isUpdatingOrders = true;
    } else {
      console.log("Already updating strategy");
    }
  }
};

process.stdin.resume();

main();
