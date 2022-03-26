import axios, { AxiosError } from "axios";
import { utils, Wallet, ethers } from "ethers";
import { exit } from "process";
import { OrderBooks, TradePairs } from "../typechain-types";
import { ContractInfo } from "../types/ContractInfo";
import { Order } from "../types/Order";
import { PairInfo } from "../types/PairInfo";
import _ from "lodash";
import { JsonRpcProvider } from "@ethersproject/providers";

export class TradingPair {
  private Exchange_ContractInfo: ContractInfo;
  private Portfolio_ContractInfo: ContractInfo;
  private TradePairs_ContractInfo: ContractInfo;
  private Orderbooks_ContractInfo: ContractInfo;
  public Order_List: Order[] = [];
  private buyBook: string;

  private DEXALOT_API = "https://api.dexalot-dev.com/api";
  private TradePairs: TradePairs;
  private wallet: Wallet;
  private pair: string;
  private pairId: any;
  private pairInfo: PairInfo;
  private provider: JsonRpcProvider;
  OrderBook: import("/Users/mathieu/Dev/projets/dexalot-playground/typechain-types/index").OrderBooks;
  sellBook: string;

  constructor(api_address: string, pair: string) {
    this.DEXALOT_API = api_address;
    this.provider = new ethers.providers.JsonRpcProvider("https://node.dexalot-dev.com/ext/bc/C/rpc");
    this.wallet = new ethers.Wallet(
      "0x49b5635429cb8a08341aef4263c761e64b056c2e9c9a054316bafd04d5a9a44a",
      this.provider
    );
    this.pair = pair;
    this.buyBook = utils.formatBytes32String(`${this.pair}-BUYBOOK`);
    this.sellBook = utils.formatBytes32String(`${this.pair}-SELLBOOK`);
  }

  public async init() {
    let initialisation_status = true;

    let PairInfo_List: PairInfo[] = [];
    const pairs = await axios
      .get(this.DEXALOT_API + "/trading/pairs")
      .then((response) => {
        PairInfo_List = response.data;
        this.pairInfo = PairInfo_List.find((pair) => pair.pair === this.pair);
      })
      .catch((error: AxiosError) => console.log(error.message));

    if (!this.pairInfo) {
      console.log("Pair not found");
      exit(1);
    }
    this.pairId = utils.formatBytes32String(this.pairInfo.pair);

    Promise.all([
      await axios
        .get(this.DEXALOT_API + "/trading/deploymentabi/Exchange")
        .then((response) => (this.Exchange_ContractInfo = response.data))
        .catch((error: AxiosError) => {
          console.log(error.message);
          initialisation_status = false;
        }),
      await axios
        .get(this.DEXALOT_API + "/trading/deploymentabi/Portfolio")
        .then((response) => (this.Portfolio_ContractInfo = response.data))
        .catch((error: AxiosError) => {
          console.log(error.message);
          initialisation_status = false;
        }),
      await axios
        .get(this.DEXALOT_API + "/trading/deploymentabi/TradePairs")
        .then((response) => (this.TradePairs_ContractInfo = response.data))
        .catch((error: AxiosError) => {
          console.log(error.message);
          initialisation_status = false;
        }),
      await axios
        .get(this.DEXALOT_API + "/trading/deploymentabi/OrderBooks")
        .then((response) => (this.Orderbooks_ContractInfo = response.data))
        .catch((error: AxiosError) => {
          console.log(error.message);
          initialisation_status = false;
        }),
      await axios
        .get(this.DEXALOT_API + `/trading/openorders/param?traderaddress=${this.wallet.address}&pair=${this.pair}`)
        .then((response) => (this.Order_List = response.data.rows))
        .catch((error: AxiosError) => {
          console.log(error.message);
        }),
    ]);

    this.TradePairs = new ethers.Contract(
      this.TradePairs_ContractInfo.address,
      this.TradePairs_ContractInfo.abi.abi,
      this.wallet
    ) as TradePairs;

    this.OrderBook = new ethers.Contract(
      this.Orderbooks_ContractInfo.address,
      this.Orderbooks_ContractInfo.abi.abi,
      this.wallet
    ) as OrderBooks;

    if (!initialisation_status) {
      console.log("Initialisation failed !");

      exit(1);
    }
  }

  public async buyOrder(price: number, quantity: number) {
    await this.placeOrder(price, quantity, 0);
  }

  public async sellOrder(price: number, quantity: number) {
    await this.placeOrder(price, quantity, 1);
  }

  private async placeOrder(price: number, quantity: number, side: number) {
    await this.TradePairs.addOrder(
      this.pairId,
      utils.parseUnits(price.toFixed(this.pairInfo.quotedisplaydecimals), this.pairInfo.quote_evmdecimals),
      utils.parseUnits(quantity.toFixed(this.pairInfo.basedisplaydecimals), this.pairInfo.base_evmdecimals),
      side,
      1
    )
      .then((tx) => tx.wait())
      .then((receipt) => {
        if (receipt.status !== 1) {
          console.log("Order failed");
          exit(1);
        } else {
          const statusChangeEvent = receipt.events.find((event) => event.event === "OrderStatusChanged");
          if (statusChangeEvent.args.status !== 0) {
            console.log("Filled some existing order, something went wrong");
          } else {
            this.Order_List.push({ id: statusChangeEvent.args.id, side: side, price: price, quantity: quantity });
          }
        }
      })
      .catch((error) => {
        console.log("placeOrder failed");
        console.log(error);
        exit(1);
      });
  }

  public async cancelAllOrders() {
    if (this.Order_List.length > 0) {
      console.log(`Cancelling ${this.Order_List.length} positions`);
      let Order_List_Ids: string[] = [];
      this.Order_List.forEach((order) => Order_List_Ids.push(order.id));
      await this.TradePairs.cancelAllOrders(this.pairId, Order_List_Ids)
        .then((tx) => tx.wait())
        .then((receipt) => {
          console.log(receipt.status);
          this.Order_List = [];
        })
        .catch((error) => {
          console.log("Cancel all orders failed");
          console.log(error);
          exit(1);
        });
    }
  }

  public async cancelOrder(orderId: string) {
    console.log(orderId);

    await this.TradePairs.cancelOrder(this.pairId, orderId)
      .then((tx) => tx.wait())
      .then((receipt) => {
        console.log(receipt.status);
        this.Order_List = this.Order_List.filter((order) => order.id !== orderId);
      })
      .catch((error) => {
        console.log("Cancel orders failed");
        console.log(error);
        exit(1);
      });
  }

  public async getTopBuyOrder() {
    return await this.OrderBook.nextPrice(this.buyBook, 0, 0);
  }
  public async getTopSellOrder() {
    return await this.OrderBook.nextPrice(this.sellBook, 1, 0);
  }
}
