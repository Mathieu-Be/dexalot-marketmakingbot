import { TradingPair } from "./classes/TradingPair";
import { utils } from "ethers";

const DEXALOT_API = "https://api.dexalot-dev.com/api";
const spread = 10;

const main = async () => {
  const myPair = new TradingPair(DEXALOT_API, "TEAM1/AVAX");

  await myPair.init(false);

  while (true) {
    let delay = Math.floor(Math.random() * 15);
    await sleep(delay);

    let buyprice = parseFloat(utils.formatEther(await myPair.getTopBuyOrder()));
    let sellprice = parseFloat(utils.formatEther(await myPair.getTopSellOrder()));

    if (buyprice !== 0 && sellprice !== 0) {
      let coin = Math.floor(Math.random() * 2);
      if (coin === 0) {
        console.log("Buying at : ", sellprice);
        await myPair.buyOrder(sellprice, 5);
      } else {
        console.log("Selling at : ", buyprice);
        await myPair.sellOrder(buyprice, 5);
      }
    }
  }
};

main();

function sleep(s) {
  return new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });
}
