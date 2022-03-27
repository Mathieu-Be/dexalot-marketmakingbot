import { PortfolioClass } from "./classes/Portfolio";

const main = async () => {
  const myPortfolio = new PortfolioClass("TEAM1", "0x49b5635429cb8a08341aef4263c761e64b056c2e9c9a054316bafd04d5a9a44a");
  await myPortfolio.init();

  console.log("TEAM1 balance on portfolio - bot : ", await myPortfolio.getBalance("TEAM1"));
  console.log("AVAX balance on portfolio - bot : ", await myPortfolio.getBalance("AVAX"));

  const myPortfolio2 = new PortfolioClass(
    "TEAM1/AVAX",
    "0xfe54029d14ff462d42b40067b4e1b7f5969ec3e03237e650074b24e80419f3c7"
  );
  await myPortfolio2.init();

  console.log("TEAM1 balance on portfolio - trader : ", await myPortfolio2.getBalance("TEAM1"));
  console.log("AVAX balance on portfolio - trader : ", await myPortfolio2.getBalance("AVAX"));
};

main();
