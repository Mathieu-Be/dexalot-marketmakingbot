import axios, { AxiosError } from "axios";
import { utils, Wallet, ethers, BigNumber } from "ethers";
import { exit } from "process";
import { OrderBooks, TradePairs } from "../types/typechain-types";
import { ContractInfo } from "../types/ContractInfo";
import { Order } from "../types/Order";
import { PairInfo } from "../types/PairInfo";
import _, { size } from "lodash";
import { JsonRpcProvider } from "@ethersproject/providers";
import { parse } from "path";
import { OrderHistoryPiece } from "../types/OrderHistoryPiece";
import { buildStrategy } from "../utils/basicstrategy";
import { Settings } from "../settings";

export class TradingPair {
  private Exchange_ContractInfo: ContractInfo;
  private Portfolio_ContractInfo: ContractInfo;
  private TradePairs_ContractInfo: ContractInfo;
  private Orderbooks_ContractInfo: ContractInfo;
  public Order_List: Order[] = [];
  private buyBook: string;
  public currentPrice: number;

  private DEXALOT_API = "https://api.dexalot-dev.com/api";
  public TradePairs: TradePairs;
  private wallet: Wallet;
  private pair: string;
  private pairId: any;
  private pairInfo: PairInfo;
  private provider: JsonRpcProvider;
  OrderBook: import("/Users/mathieu/Dev/projets/dexalot-playground/typechain-types/index").OrderBooks;
  sellBook: string;
  OrderStatusChangedListener: TradePairs;
  isBot: Boolean;
  isUpdatingOrders: boolean;

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

  public async init(createListeners: Boolean = true) {
    let initialisation_status = true;
    this.isBot = createListeners;
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

    this.currentPrice = await this.getOrderBookMiddle();
    if (this.currentPrice === 0) {
      this.currentPrice = 15; //Arbitrary price if order book is empty
    }

    if (createListeners) {
      this.TradePairs.on(
        "OrderStatusChanged",
        (
          traderaddress: string,
          pair: string,
          id: string,
          price: BigNumber,
          totalamount: BigNumber,
          quantity: BigNumber,
          side: number,
          type1: number,
          status: number,
          quantityfilled: BigNumber,
          totalfee: BigNumber
        ) => {
          if (traderaddress === this.wallet.address) {
            console.log(status);

            switch (status) {
              case 0: // New order
                break;
              case 2: // Partial
                break;
              case 3: // Filled
                break;
              case 4: // Cancelled
              default:
                break;
            }

            const orderIndex = this.Order_List.findIndex((order) => order.id === id);

            if (orderIndex !== -1) {
              this.Order_List[orderIndex].status = status;
              this.Order_List[orderIndex].quantityfilled = utils.formatEther(quantityfilled);
            }
          }
        }
      );

      this.TradePairs.on(
        "Executed",
        async (
          pair: string,
          price: BigNumber,
          quantity: BigNumber,
          maker: string,
          taker: string,
          feeMaker: BigNumber,
          feeTaker: BigNumber,
          feeMakerBase: Boolean,
          execId: BigNumber
        ) => {
          this.currentPrice = parseFloat(utils.formatEther(price));

          const order = this.Order_List.find((order) => order.id === maker);
          if (order) {
            this.Order_List = this.Order_List.filter((order) => order.id !== maker);
            if (!this.isUpdatingOrders) {
              this.isUpdatingOrders = true;
              await this.updateOrders();
              this.isUpdatingOrders = false;
            }
            console.log(
              "This Order has been filled : ",
              utils.formatEther(price),
              utils.formatEther(quantity),
              order.side
            );
          }
        }
      );

      if (this.Order_List.length > 0) {
        console.log(`${this.Order_List.length} positions opened at startup, closing them...`);
        await this.cancelAllOrders();
      }
      await this.createPairOrder(this.currentPrice, 10, 1);
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
      1,
      {
        gasLimit: 8000000,
      }
    )
      .then((tx) => tx.wait())
      .then((receipt) => {
        if (receipt.status !== 1) {
          console.log("Order failed");
          exit(1);
        } else {
          const statusChangeEvent = receipt.events.find((event) => event.event === "OrderStatusChanged");
          if (statusChangeEvent.args.status !== 0) {
            if (this.isBot) {
              console.log("Filled some existing order, something went wrong");
            }
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
    await this.TradePairs.cancelOrder(this.pairId, orderId, {
      gasLimit: 8000000,
    })
      .then((tx) => tx.wait())
      .then((receipt) => {
        if (receipt.status == 1) {
          this.Order_List = this.Order_List.filter((order) => order.id !== orderId);
        }
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
  public async getOrderBookMiddle() {
    const sellprice = await this.getTopSellOrder();
    const buyprice = await this.getTopBuyOrder();
    const price = buyprice.add(sellprice).div(2);
    return parseFloat(utils.formatEther(price));
  }
  public async createPairOrder(price: number, quantity: number, spread: number) {
    await this.buyOrder(price - spread, quantity);
    await this.sellOrder(price + spread, quantity);
  }
  public async getBuyBook() {
    return await this.getBook(this.buyBook, 1);
  }
  public async getSellBook() {
    return await this.getBook(this.sellBook, 1);
  }
  private async getBook(book: string, order: number) {
    let OrderHistory: OrderHistoryPiece[] = [];
    let OrderHistoryRaw = await this.OrderBook.getNOrdersOld(book, 100, order);
    for (let i = 0; i < OrderHistoryRaw[0].length; i++) {
      if (parseFloat(utils.formatEther(OrderHistoryRaw[1][i])) > 0) {
        OrderHistory.push({
          price: parseFloat(utils.formatEther(OrderHistoryRaw[0][i])),
          quantity: parseFloat(utils.formatEther(OrderHistoryRaw[1][i])),
        });
      }
    }
    return OrderHistory;
  }
  public async updateOrders() {
    const newOrders = buildStrategy(this.currentPrice);

    console.log(this.Order_List.length);

    for (let i = 0; i < this.Order_List.length; i++) {
      // If any order is not on the desired order list, cancels it
      if (!newOrders.find((order) => order.price === this.Order_List[i].price)) {
        console.log("Cancelling order", this.Order_List[i].price);
        await this.cancelOrder(this.Order_List[i].id);
      }
    }

    for (let i = 0; i < newOrders.length; i++) {
      // If any desired order is not on the current order list, creates it
      if (!this.Order_List.find((order) => order.price === newOrders[i].price)) {
        console.log("Creating Order", newOrders[i].price);
        await this.placeOrder(newOrders[i].price, newOrders[i].quantity, newOrders[i].side);
      }
    }
  }
}
