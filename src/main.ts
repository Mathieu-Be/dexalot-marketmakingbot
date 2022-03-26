import { TradingPair } from "./classes/TradingPair";

const DEXALOT_API = "https://api.dexalot-dev.com/api";

const main = async () => {
  const myPair = new TradingPair(DEXALOT_API, "TEAM1/AVAX");

  await myPair.init();

  await myPair.sellOrder(15, 10.6);
};

main();
