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
  await myPair.buyOrder(10, 10);
  await myPair.buyOrder(12, 10);
  await myPair.buyOrder(13, 20);
  await myPair.sellOrder(20, 10);
  await myPair.sellOrder(18, 20);
  await myPair.sellOrder(16, 14.4);

  await myPair.buyOrder(16, 30);
};

main();
