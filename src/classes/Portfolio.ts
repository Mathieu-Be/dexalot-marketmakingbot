import axios, { AxiosError } from "axios";
import { utils, Wallet, ethers, BigNumber } from "ethers";
import { exit } from "process";
import { ERC20, ERC20__factory, OrderBooks, Portfolio, TradePairs } from "../types/typechain-types";
import { ContractInfo } from "../types/ContractInfo";
import { Order } from "../types/Order";
import _ from "lodash";
import { JsonRpcProvider } from "@ethersproject/providers";
import dotenv from "dotenv";
dotenv.config();

const MAX_UINT = BigNumber.from(2).pow(256).sub(1);

export class PortfolioClass {
  private Portfolio_ContractInfo: ContractInfo;
  private Orderbooks_ContractInfo: ContractInfo;
  public Order_List: Order[] = [];
  public currentPrice: number;

  private DEXALOT_API = process.env.DEXALOT_API;
  public TradePairs: TradePairs;
  private wallet: Wallet;
  private provider: JsonRpcProvider;
  private Portfolio: Portfolio;
  private tokenbase: string;
  private ERC20: ERC20;

  constructor(tokenbase: string, privatekey: string) {
    this.provider = new ethers.providers.JsonRpcProvider(process.env.DEXALOT_RPC);
    this.wallet = new ethers.Wallet(privatekey, this.provider);
    this.tokenbase = tokenbase;
  }

  public async init() {
    let initialisation_status = true;

    // API initialisation
    await Promise.all([
      axios
        .get(this.DEXALOT_API + "/trading/deploymentabi/Portfolio")
        .then((response) => (this.Portfolio_ContractInfo = response.data))
        .catch((error: AxiosError) => {
          console.log(error.message);
          initialisation_status = false;
        }),
      axios
        .get(this.DEXALOT_API + "/trading/deploymentabi/OrderBooks")
        .then((response) => (this.Orderbooks_ContractInfo = response.data))
        .catch((error: AxiosError) => {
          console.log(error.message);
          initialisation_status = false;
        }),
    ]);

    // Contrat initialisation
    this.Portfolio = new ethers.Contract(
      this.Portfolio_ContractInfo.address,
      this.Portfolio_ContractInfo.abi.abi,
      this.wallet
    ) as Portfolio;

    this.ERC20 = new ethers.Contract(
      await this.Portfolio.getToken(utils.formatBytes32String(this.tokenbase)),
      ERC20__factory.abi,
      this.wallet
    ) as ERC20;

    // Stopping if itialisation failed
    if (!initialisation_status) {
      console.log("Initialisation failed !");
      exit(1);
    }
  }

  public async getBalance(tokensymbol: string) {
    const balance = await this.Portfolio.getBalance(this.wallet.address, utils.formatBytes32String(tokensymbol));
    return parseFloat(utils.formatEther(balance.available));
  }

  public async depositAVAX(quantity: number) {
    const quantityWei = utils.parseEther(quantity.toString());

    // Checking if sufficient balance
    if ((await this.wallet.getBalance("latest")).gt(quantityWei)) {
      const transaction = {
        to: this.Portfolio.address,
        value: quantityWei,
      };

      const tx = await this.wallet.sendTransaction(transaction);

      await tx.wait();
    } else {
      console.log("Insufficient balance !");
    }
  }

  public async depositERC20(quantity: number) {
    const quantityWei = utils.parseEther(quantity.toString());

    // Checking if sufficient balance
    if ((await this.ERC20.balanceOf(this.wallet.address)).gt(quantityWei)) {
      // Checking if sufficient allowance
      if (!(await this.ERC20.allowance(this.wallet.address, this.Portfolio.address)).gt(quantityWei)) {
        await this.ERC20.approve(this.Portfolio.address, MAX_UINT);
      }

      const tx = await this.Portfolio.depositToken(
        this.wallet.address,
        utils.formatBytes32String(this.tokenbase),
        utils.parseEther(quantity.toString())
      );

      await tx.wait();
    } else {
      console.log("Insufficient balance !");
    }
  }
}
