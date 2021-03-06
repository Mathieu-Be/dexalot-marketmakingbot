import axios, { AxiosError } from "axios";
import { utils, Wallet, ethers, BigNumber } from "ethers";
import { exit } from "process";
import { OrderBooks, TradePairs } from "../types/typechain-types";
import { ContractInfo } from "../types/ContractInfo";
import { Order } from "../types/Order";
import { PairInfo } from "../types/PairInfo";
import _ from "lodash";
import { JsonRpcProvider } from "@ethersproject/providers";
import { OrderHistoryPiece } from "../types/OrderHistoryPiece";
import { buildStrategy } from "../utils/basicstrategy";
import { sleep } from "../utils/sleep";
import chalk from "chalk";
import { Settings } from "../settings";
import dotenv from "dotenv";
dotenv.config();

export class TradingPair {
  private TradePairs_ContractInfo: ContractInfo;
  private Orderbooks_ContractInfo: ContractInfo;
  public Order_List: Order[] = [];
  private buyBook: string;
  public currentPrice: number;
  private started = false;

  private DEXALOT_API;
  public TradePairs: TradePairs;
  private wallet: Wallet;
  private pair: string;
  private pairId: any;
  private pairInfo: PairInfo;
  private provider: JsonRpcProvider;
  private OrderBook: OrderBooks;
  private sellBook: string;
  private isBot: Boolean;

  constructor(pair: string, privatekey: string) {
    this.DEXALOT_API = process.env.DEXALOT_API;
    this.provider = new ethers.providers.JsonRpcProvider(process.env.DEXALOT_RPC);
    this.wallet = new ethers.Wallet(privatekey, this.provider);
    this.pair = pair;
    this.buyBook = utils.formatBytes32String(`${this.pair}-BUYBOOK`);
    this.sellBook = utils.formatBytes32String(`${this.pair}-SELLBOOK`);
  }

  public async init(createListeners: Boolean = true) {
    let initialisation_status = true;
    this.isBot = createListeners;
    let PairInfo_List: PairInfo[] = [];

    // Pair initialisation
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

    // API initialisation
    await Promise.all([
      axios
        .get(this.DEXALOT_API + "/trading/deploymentabi/TradePairs")
        .then((response) => (this.TradePairs_ContractInfo = response.data))
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
      axios
        .get(this.DEXALOT_API + `/trading/openorders/param?traderaddress=${this.wallet.address}&pair=${this.pair}`)
        .then((response) => (this.Order_List = response.data.rows))
        .catch((error: AxiosError) => {
          console.log(error.message);
        }),
    ]);

    // Contract initialisation
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

    // Exit if initialisation failed
    if (!initialisation_status) {
      console.log("Initialisation failed !");
      exit(1);
    }

    // Fetching initial price
    this.currentPrice = await this.getOrderBookMiddle();
    if (this.currentPrice === 0) {
      this.currentPrice = Settings.initial_price; //Arbitrary price if order book is empty
    }

    // Creating contract listeners only if we are in "bot" mode (I use the same classe for more basic usage)
    if (createListeners) {
      // "Order status changed event"
      this.TradePairs.on(
        "OrderStatusChanged",
        async (
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
          if (traderaddress === this.wallet.address && this.started) {
            const eventOrder = {
              id: id,
              price: parseFloat(utils.formatEther(price)),
              quantity: parseFloat(utils.formatEther(quantity)),
              side: side,
            };

            switch (status) {
              case 0: // New order
                {
                  this.Order_List.push(eventOrder);
                  console.log("Order placed", eventOrder.price);
                }
                break;
              case 2: // Partial
                {
                  console.log(chalk.blue("Order partially filled", parseFloat(utils.formatEther(quantityfilled))));
                }
                break;
              case 3: // Filled
                {
                  this.Order_List = this.Order_List.filter((order) => order.id !== eventOrder.id);

                  console.log(chalk.green("Order filled", eventOrder.price));

                  this.currentPrice = parseFloat(utils.formatEther(price));
                  await this.updateOrders();
                }
                break;
              case 4: // Cancelled
                {
                  this.Order_List = this.Order_List.filter((order) => order.id !== eventOrder.id);
                  console.log(chalk.red("Order cancelled", eventOrder.price));
                }
                break;
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

      // "Executed event"
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
          if (this.started) {
            this.currentPrice = parseFloat(utils.formatEther(price));
          }
        }
      );

      // Cancelling any previous orders (bot crashed)
      if (this.Order_List.length > 0) {
        console.log(`${this.Order_List.length} positions opened at startup, closing them...`);
        await this.cancelAllOrders();
      }

      // Waiting 4 seconds before really reacting to contract events
      await sleep(4);
      this.started = true;
      // First set of orders
      await this.updateOrders();
    }
  }
  public async updateOrders() {
    // The price taken into acount is the middle of the orderbook
    let price = await this.getOrderBookMiddle();

    // If the sell book or the buy book are emtpy, takes the last price
    if (!(price > 0)) {
      price = this.currentPrice;
    }

    // Building the market making strategy
    let newOrders = buildStrategy(price);

    console.log("Updating strategy...");

    // Calculating gas costs for replacing an order
    let cancelOrderCostGwei = BigNumber.from(0);
    let addOrderCostGwei = BigNumber.from(0);
    const gasPrice = await this.provider.getGasPrice();
    try {
      if (this.Order_List.length > 0)
        cancelOrderCostGwei = await this.TradePairs.estimateGas.cancelOrder(
          utils.formatBytes32String(this.pair),
          this.Order_List[0].id
        );
      if (newOrders.length > 0)
        addOrderCostGwei = await this.TradePairs.estimateGas.addOrder(
          utils.formatBytes32String(this.pair),
          utils.parseUnits(
            newOrders[0].price.toFixed(this.pairInfo.quotedisplaydecimals),
            this.pairInfo.quote_evmdecimals
          ),
          utils.parseUnits(
            newOrders[0].quantity.toFixed(this.pairInfo.basedisplaydecimals),
            this.pairInfo.base_evmdecimals
          ),
          newOrders[0].side,
          1
        );
    } catch {
      console.log(chalk.redBright("Gas estimation error"));
    }

    const replaceOrderCostAvax = parseFloat(utils.formatEther(cancelOrderCostGwei.add(addOrderCostGwei).mul(gasPrice)));

    for (let i = 0; i < this.Order_List.length; i++) {
      // If any order is not on the desired order list, cancels it
      if (!newOrders.find((order) => order.price === this.Order_List[i].price)) {
        // But only if the replacement is worth the cost of the transaction
        if (
          newOrders.find(
            (order) => Math.abs(order.price - this.Order_List[i].price) * order.quantity < replaceOrderCostAvax
          )
        ) {
          console.log(chalk.bgMagentaBright("Order not worth replacing :", this.Order_List[i].price));
          // In this case we don't want to cancel the order but we also don't want to create a new one
          newOrders = newOrders.filter(
            (order) => Math.abs(order.price - this.Order_List[i].price) * order.quantity < replaceOrderCostAvax
          );
        } else {
          await this.cancelOrder(this.Order_List[i].id);
        }
      }
    }

    for (let i = 0; i < newOrders.length; i++) {
      // If any desired order is not on the current order list, creates it
      if (!this.Order_List.find((order) => order.price === newOrders[i].price)) {
        await this.placeOrder(newOrders[i].price, newOrders[i].quantity, newOrders[i].side);
      }
    }

    await sleep(3);
    console.log("Waiting for trades...");
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
          // this.Order_List is update by the contract listener
          console.log(
            chalk.gray.italic(
              "Gas paid for placing order : " +
                utils.formatUnits(receipt.gasUsed, "wei") +
                " at " +
                utils.formatUnits(receipt.effectiveGasPrice, "gwei")
            )
          );

          const statusChangeEvent = receipt.events.find((event) => event.event === "OrderStatusChanged");
          if (statusChangeEvent.args.status !== 0) {
            if (this.isBot) {
              console.log("Filled some existing order, something went wrong");
            }
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
        .then(async (tx) => {
          // On startup the event listeners are not active yet so I empty the list here
          this.Order_List = [];
          await tx.wait();
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
          console.log(
            chalk.gray.italic(
              "Gas paid for cancelling order : " +
                utils.formatUnits(receipt.gasUsed, "wei") +
                " at " +
                utils.formatUnits(receipt.effectiveGasPrice, "gwei")
            )
          );
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
    if (sellprice.gt(0) && buyprice.gt(0)) {
      const price = buyprice.add(sellprice).div(2);
      return parseFloat(utils.formatEther(price));
    } else {
      return 0;
    }
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
}
