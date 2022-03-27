import { TradingPair } from "./classes/TradingPair";
import { utils } from "ethers";

const DEXALOT_API = "https://api.dexalot-dev.com/api";
const spread = 10;

const main = async () => {
  const myPair = new TradingPair(
    DEXALOT_API,
    "TEAM1/AVAX",
    "0xfe54029d14ff462d42b40067b4e1b7f5969ec3e03237e650074b24e80419f3c7"
  );

  await myPair.init(false);

  while (true) {
    let delay = Math.floor(Math.random() * 9);
    await sleep(delay + 2); // Wait between 2 and 10 sec between trades

    let buyprice = parseFloat(utils.formatEther(await myPair.getTopBuyOrder()));
    let sellprice = parseFloat(utils.formatEther(await myPair.getTopSellOrder()));

    if (buyprice > 4 && sellprice > 4) {
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
