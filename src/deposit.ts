import { PortfolioClass } from "./classes/Portfolio";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const myPortfolio = new PortfolioClass(
    process.env.DEXALOT_API,
    "TEAM1", // Base token, this only works if it is against AVAX
    process.env.BOT_PRIVATE_KEY
  );
  await myPortfolio.init();

  console.log("TEAM1 balance on portfolio - before : ", await myPortfolio.getBalance("TEAM1"));
  console.log("AVAX balance on portfolio - before : ", await myPortfolio.getBalance("AVAX"));

  await myPortfolio.depositAVAX(1);
  await myPortfolio.depositERC20(1);

  console.log("TEAM1 balance on portfolio - after : ", await myPortfolio.getBalance("TEAM1"));
  console.log("AVAX balance on portfolio - after : ", await myPortfolio.getBalance("AVAX"));
};

main();
