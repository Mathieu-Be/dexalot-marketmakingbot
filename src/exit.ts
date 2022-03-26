import { TradingPair } from "./classes/TradingPair";
import { cTable } from "console.table";

const DEXALOT_API = "https://api.dexalot-dev.com/api";
const spread = 10;

const main = async () => {
  const myPair = new TradingPair(
    DEXALOT_API,
    "TEAM1/AVAX",
    "0x49b5635429cb8a08341aef4263c761e64b056c2e9c9a054316bafd04d5a9a44a"
  );
  await myPair.init(false);
  await myPair.cancelAllOrders();

  const myPair2 = new TradingPair(
    DEXALOT_API,
    "TEAM1/AVAX",
    "0xfe54029d14ff462d42b40067b4e1b7f5969ec3e03237e650074b24e80419f3c7"
  );
  await myPair2.init(false);
  await myPair2.cancelAllOrders();
};

main();
