import { Wallet } from "ethers";
import { exit } from "process";
import { TradingPair } from "./classes/TradingPair";
import { Settings } from "./settings";
import { sleep } from "./utils/sleep";

const DEXALOT_API = "https://api.dexalot-dev.com/api";
const spread = 10;
let hasExited = false;

const main = async () => {
  const myPair = new TradingPair(
    DEXALOT_API,
    "TEAM1/AVAX",
    "0x49b5635429cb8a08341aef4263c761e64b056c2e9c9a054316bafd04d5a9a44a"
  );

  await myPair.init();

  process.on("SIGINT", async () => {
    if (!hasExited) {
      hasExited = true;
      console.log();
      await myPair.cancelAllOrders();
      await sleep(5);
      exit(0);
    }
  });

  while (true) {
    await sleep(Settings.refresh_rate);
    // if (!myPair.isUpdatingOrders) {
    //   console.log("Updating strategy...");
    //   myPair.isUpdatingOrders = true;
    //   await myPair.updateOrders();
    //   myPair.isUpdatingOrders = true;
    // } else {
    //   console.log("Already updating strategy");
    // }
  }
};

process.stdin.resume();

main().then(() => exit(0));
