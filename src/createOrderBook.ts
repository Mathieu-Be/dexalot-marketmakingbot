import { TradingPair } from "./classes/TradingPair";

const main = async () => {
  const myPair = new TradingPair(process.env.DEXALOT_API, "TEAM1/AVAX", process.env.BOT_PRIVATE_KEY);
  await myPair.init(false);
  await myPair.cancelAllOrders();
  await myPair.buyOrder(10, 10);
  await myPair.buyOrder(12, 10);
  await myPair.buyOrder(13, 20);
  await myPair.sellOrder(20, 10);
  await myPair.sellOrder(18, 20);
  await myPair.sellOrder(16, 14.4);
};

main();
