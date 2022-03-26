/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export declare namespace ITradePairs {
  export type OrderStruct = {
    id: BytesLike;
    price: BigNumberish;
    totalAmount: BigNumberish;
    quantity: BigNumberish;
    quantityFilled: BigNumberish;
    totalFee: BigNumberish;
    traderaddress: string;
    side: BigNumberish;
    type1: BigNumberish;
    status: BigNumberish;
  };

  export type OrderStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    number,
    number,
    number
  ] & {
    id: string;
    price: BigNumber;
    totalAmount: BigNumber;
    quantity: BigNumber;
    quantityFilled: BigNumber;
    totalFee: BigNumber;
    traderaddress: string;
    side: number;
    type1: number;
    status: number;
  };
}

export interface ITradePairsInterface extends utils.Interface {
  functions: {
    "addOrder(bytes32,uint256,uint256,uint8,uint8)": FunctionFragment;
    "addOrderType(bytes32,uint8)": FunctionFragment;
    "addTradePair(bytes32,bytes32,uint8,uint8,bytes32,uint8,uint8,uint256,uint256,uint8)": FunctionFragment;
    "cancelAllOrders(bytes32,bytes32[])": FunctionFragment;
    "cancelOrder(bytes32,bytes32)": FunctionFragment;
    "cancelReplaceOrder(bytes32,bytes32,uint256,uint256)": FunctionFragment;
    "getAllowedSlippagePercent(bytes32)": FunctionFragment;
    "getAuctionData(bytes32)": FunctionFragment;
    "getDecimals(bytes32,bool)": FunctionFragment;
    "getDisplayDecimals(bytes32,bool)": FunctionFragment;
    "getMakerRate(bytes32)": FunctionFragment;
    "getMaxTradeAmount(bytes32)": FunctionFragment;
    "getMinTradeAmount(bytes32)": FunctionFragment;
    "getNBuyBook(bytes32,uint256,uint256,uint256,bytes32)": FunctionFragment;
    "getNSellBook(bytes32,uint256,uint256,uint256,bytes32)": FunctionFragment;
    "getOrder(bytes32)": FunctionFragment;
    "getSymbol(bytes32,bool)": FunctionFragment;
    "getTakerRate(bytes32)": FunctionFragment;
    "getTradePairs()": FunctionFragment;
    "matchAuctionOrders(bytes32,uint8)": FunctionFragment;
    "pause()": FunctionFragment;
    "pauseAddOrder(bytes32,bool)": FunctionFragment;
    "pauseTradePair(bytes32,bool)": FunctionFragment;
    "removeOrderType(bytes32,uint8)": FunctionFragment;
    "setAllowedSlippagePercent(bytes32,uint8)": FunctionFragment;
    "setAuctionMode(bytes32,uint8)": FunctionFragment;
    "setAuctionPrice(bytes32,uint256,uint256)": FunctionFragment;
    "setDisplayDecimals(bytes32,uint8,bool)": FunctionFragment;
    "setMaxTradeAmount(bytes32,uint256)": FunctionFragment;
    "setMinTradeAmount(bytes32,uint256)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateRate(bytes32,uint256,uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addOrder"
      | "addOrderType"
      | "addTradePair"
      | "cancelAllOrders"
      | "cancelOrder"
      | "cancelReplaceOrder"
      | "getAllowedSlippagePercent"
      | "getAuctionData"
      | "getDecimals"
      | "getDisplayDecimals"
      | "getMakerRate"
      | "getMaxTradeAmount"
      | "getMinTradeAmount"
      | "getNBuyBook"
      | "getNSellBook"
      | "getOrder"
      | "getSymbol"
      | "getTakerRate"
      | "getTradePairs"
      | "matchAuctionOrders"
      | "pause"
      | "pauseAddOrder"
      | "pauseTradePair"
      | "removeOrderType"
      | "setAllowedSlippagePercent"
      | "setAuctionMode"
      | "setAuctionPrice"
      | "setDisplayDecimals"
      | "setMaxTradeAmount"
      | "setMinTradeAmount"
      | "unpause"
      | "updateRate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addOrder",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addOrderType",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addTradePair",
    values: [
      BytesLike,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelAllOrders",
    values: [BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelReplaceOrder",
    values: [BytesLike, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllowedSlippagePercent",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuctionData",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDecimals",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getDisplayDecimals",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getMakerRate",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxTradeAmount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinTradeAmount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNBuyBook",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNSellBook",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getOrder", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getSymbol",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getTakerRate",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTradePairs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "matchAuctionOrders",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pauseAddOrder",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "pauseTradePair",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "removeOrderType",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowedSlippagePercent",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuctionMode",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuctionPrice",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDisplayDecimals",
    values: [BytesLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxTradeAmount",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinTradeAmount",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateRate",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addOrder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addOrderType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addTradePair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelAllOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelReplaceOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllowedSlippagePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuctionData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDisplayDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMakerRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxTradeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinTradeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNBuyBook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNSellBook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSymbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTakerRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTradePairs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "matchAuctionOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pauseAddOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pauseTradePair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeOrderType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllowedSlippagePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuctionMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuctionPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDisplayDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxTradeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinTradeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateRate", data: BytesLike): Result;

  events: {};
}

export interface ITradePairs extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITradePairsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addOrder(
      _tradePairId: BytesLike,
      _price: BigNumberish,
      _quantity: BigNumberish,
      _side: BigNumberish,
      _type1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addOrderType(
      _tradePairId: BytesLike,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addTradePair(
      _tradePairId: BytesLike,
      _baseSymbol: BytesLike,
      _baseDecimals: BigNumberish,
      _baseDisplayDecimals: BigNumberish,
      _quoteSymbol: BytesLike,
      _quoteDecimals: BigNumberish,
      _quoteDisplayDecimals: BigNumberish,
      _minTradeAmount: BigNumberish,
      _maxTradeAmount: BigNumberish,
      _mode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelAllOrders(
      _tradePairId: BytesLike,
      _orderIds: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelOrder(
      _tradePairId: BytesLike,
      _orderId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelReplaceOrder(
      _tradePairId: BytesLike,
      _orderId: BytesLike,
      _price: BigNumberish,
      _quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllowedSlippagePercent(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getAuctionData(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber, BigNumber, BigNumber, BigNumber]>;

    getDecimals(
      _tradePairId: BytesLike,
      _isBase: boolean,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getDisplayDecimals(
      _tradePairId: BytesLike,
      _isBase: boolean,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getMakerRate(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMaxTradeAmount(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMinTradeAmount(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNBuyBook(
      _tradePairId: BytesLike,
      nPrice: BigNumberish,
      nOrder: BigNumberish,
      lastPrice: BigNumberish,
      lastOrder: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[], BigNumber, string]>;

    getNSellBook(
      _tradePairId: BytesLike,
      nPrice: BigNumberish,
      nOrder: BigNumberish,
      lastPrice: BigNumberish,
      lastOrder: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[], BigNumber, string]>;

    getOrder(
      _orderUid: BytesLike,
      overrides?: CallOverrides
    ): Promise<[ITradePairs.OrderStructOutput]>;

    getSymbol(
      _tradePairId: BytesLike,
      _isBase: boolean,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTakerRate(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTradePairs(overrides?: CallOverrides): Promise<[string[]]>;

    matchAuctionOrders(
      _tradePairId: BytesLike,
      maxCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pauseAddOrder(
      _tradePairId: BytesLike,
      _allowAddOrder: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pauseTradePair(
      _tradePairId: BytesLike,
      _pairPaused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeOrderType(
      _tradePairId: BytesLike,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAllowedSlippagePercent(
      _tradePairId: BytesLike,
      _allowedSlippagePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAuctionMode(
      _tradePairId: BytesLike,
      _mode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAuctionPrice(
      _tradePairId: BytesLike,
      _price: BigNumberish,
      _pct: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDisplayDecimals(
      _tradePairId: BytesLike,
      _displayDecimals: BigNumberish,
      _isBase: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxTradeAmount(
      _tradePairId: BytesLike,
      _maxTradeAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinTradeAmount(
      _tradePairId: BytesLike,
      _minTradeAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRate(
      _tradePairId: BytesLike,
      _rate: BigNumberish,
      _rateType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addOrder(
    _tradePairId: BytesLike,
    _price: BigNumberish,
    _quantity: BigNumberish,
    _side: BigNumberish,
    _type1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addOrderType(
    _tradePairId: BytesLike,
    _type: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addTradePair(
    _tradePairId: BytesLike,
    _baseSymbol: BytesLike,
    _baseDecimals: BigNumberish,
    _baseDisplayDecimals: BigNumberish,
    _quoteSymbol: BytesLike,
    _quoteDecimals: BigNumberish,
    _quoteDisplayDecimals: BigNumberish,
    _minTradeAmount: BigNumberish,
    _maxTradeAmount: BigNumberish,
    _mode: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelAllOrders(
    _tradePairId: BytesLike,
    _orderIds: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelOrder(
    _tradePairId: BytesLike,
    _orderId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelReplaceOrder(
    _tradePairId: BytesLike,
    _orderId: BytesLike,
    _price: BigNumberish,
    _quantity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllowedSlippagePercent(
    _tradePairId: BytesLike,
    overrides?: CallOverrides
  ): Promise<number>;

  getAuctionData(
    _tradePairId: BytesLike,
    overrides?: CallOverrides
  ): Promise<[number, BigNumber, BigNumber, BigNumber, BigNumber]>;

  getDecimals(
    _tradePairId: BytesLike,
    _isBase: boolean,
    overrides?: CallOverrides
  ): Promise<number>;

  getDisplayDecimals(
    _tradePairId: BytesLike,
    _isBase: boolean,
    overrides?: CallOverrides
  ): Promise<number>;

  getMakerRate(
    _tradePairId: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMaxTradeAmount(
    _tradePairId: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMinTradeAmount(
    _tradePairId: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNBuyBook(
    _tradePairId: BytesLike,
    nPrice: BigNumberish,
    nOrder: BigNumberish,
    lastPrice: BigNumberish,
    lastOrder: BytesLike,
    overrides?: CallOverrides
  ): Promise<[BigNumber[], BigNumber[], BigNumber, string]>;

  getNSellBook(
    _tradePairId: BytesLike,
    nPrice: BigNumberish,
    nOrder: BigNumberish,
    lastPrice: BigNumberish,
    lastOrder: BytesLike,
    overrides?: CallOverrides
  ): Promise<[BigNumber[], BigNumber[], BigNumber, string]>;

  getOrder(
    _orderUid: BytesLike,
    overrides?: CallOverrides
  ): Promise<ITradePairs.OrderStructOutput>;

  getSymbol(
    _tradePairId: BytesLike,
    _isBase: boolean,
    overrides?: CallOverrides
  ): Promise<string>;

  getTakerRate(
    _tradePairId: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTradePairs(overrides?: CallOverrides): Promise<string[]>;

  matchAuctionOrders(
    _tradePairId: BytesLike,
    maxCount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pauseAddOrder(
    _tradePairId: BytesLike,
    _allowAddOrder: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pauseTradePair(
    _tradePairId: BytesLike,
    _pairPaused: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeOrderType(
    _tradePairId: BytesLike,
    _type: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAllowedSlippagePercent(
    _tradePairId: BytesLike,
    _allowedSlippagePercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAuctionMode(
    _tradePairId: BytesLike,
    _mode: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAuctionPrice(
    _tradePairId: BytesLike,
    _price: BigNumberish,
    _pct: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDisplayDecimals(
    _tradePairId: BytesLike,
    _displayDecimals: BigNumberish,
    _isBase: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxTradeAmount(
    _tradePairId: BytesLike,
    _maxTradeAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinTradeAmount(
    _tradePairId: BytesLike,
    _minTradeAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRate(
    _tradePairId: BytesLike,
    _rate: BigNumberish,
    _rateType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addOrder(
      _tradePairId: BytesLike,
      _price: BigNumberish,
      _quantity: BigNumberish,
      _side: BigNumberish,
      _type1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addOrderType(
      _tradePairId: BytesLike,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addTradePair(
      _tradePairId: BytesLike,
      _baseSymbol: BytesLike,
      _baseDecimals: BigNumberish,
      _baseDisplayDecimals: BigNumberish,
      _quoteSymbol: BytesLike,
      _quoteDecimals: BigNumberish,
      _quoteDisplayDecimals: BigNumberish,
      _minTradeAmount: BigNumberish,
      _maxTradeAmount: BigNumberish,
      _mode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelAllOrders(
      _tradePairId: BytesLike,
      _orderIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    cancelOrder(
      _tradePairId: BytesLike,
      _orderId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelReplaceOrder(
      _tradePairId: BytesLike,
      _orderId: BytesLike,
      _price: BigNumberish,
      _quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllowedSlippagePercent(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    getAuctionData(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber, BigNumber, BigNumber, BigNumber]>;

    getDecimals(
      _tradePairId: BytesLike,
      _isBase: boolean,
      overrides?: CallOverrides
    ): Promise<number>;

    getDisplayDecimals(
      _tradePairId: BytesLike,
      _isBase: boolean,
      overrides?: CallOverrides
    ): Promise<number>;

    getMakerRate(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaxTradeAmount(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinTradeAmount(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNBuyBook(
      _tradePairId: BytesLike,
      nPrice: BigNumberish,
      nOrder: BigNumberish,
      lastPrice: BigNumberish,
      lastOrder: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[], BigNumber, string]>;

    getNSellBook(
      _tradePairId: BytesLike,
      nPrice: BigNumberish,
      nOrder: BigNumberish,
      lastPrice: BigNumberish,
      lastOrder: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[], BigNumber, string]>;

    getOrder(
      _orderUid: BytesLike,
      overrides?: CallOverrides
    ): Promise<ITradePairs.OrderStructOutput>;

    getSymbol(
      _tradePairId: BytesLike,
      _isBase: boolean,
      overrides?: CallOverrides
    ): Promise<string>;

    getTakerRate(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTradePairs(overrides?: CallOverrides): Promise<string[]>;

    matchAuctionOrders(
      _tradePairId: BytesLike,
      maxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    pauseAddOrder(
      _tradePairId: BytesLike,
      _allowAddOrder: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    pauseTradePair(
      _tradePairId: BytesLike,
      _pairPaused: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    removeOrderType(
      _tradePairId: BytesLike,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAllowedSlippagePercent(
      _tradePairId: BytesLike,
      _allowedSlippagePercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAuctionMode(
      _tradePairId: BytesLike,
      _mode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAuctionPrice(
      _tradePairId: BytesLike,
      _price: BigNumberish,
      _pct: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDisplayDecimals(
      _tradePairId: BytesLike,
      _displayDecimals: BigNumberish,
      _isBase: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxTradeAmount(
      _tradePairId: BytesLike,
      _maxTradeAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinTradeAmount(
      _tradePairId: BytesLike,
      _minTradeAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updateRate(
      _tradePairId: BytesLike,
      _rate: BigNumberish,
      _rateType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addOrder(
      _tradePairId: BytesLike,
      _price: BigNumberish,
      _quantity: BigNumberish,
      _side: BigNumberish,
      _type1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addOrderType(
      _tradePairId: BytesLike,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addTradePair(
      _tradePairId: BytesLike,
      _baseSymbol: BytesLike,
      _baseDecimals: BigNumberish,
      _baseDisplayDecimals: BigNumberish,
      _quoteSymbol: BytesLike,
      _quoteDecimals: BigNumberish,
      _quoteDisplayDecimals: BigNumberish,
      _minTradeAmount: BigNumberish,
      _maxTradeAmount: BigNumberish,
      _mode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelAllOrders(
      _tradePairId: BytesLike,
      _orderIds: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelOrder(
      _tradePairId: BytesLike,
      _orderId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelReplaceOrder(
      _tradePairId: BytesLike,
      _orderId: BytesLike,
      _price: BigNumberish,
      _quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllowedSlippagePercent(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuctionData(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDecimals(
      _tradePairId: BytesLike,
      _isBase: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDisplayDecimals(
      _tradePairId: BytesLike,
      _isBase: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMakerRate(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaxTradeAmount(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinTradeAmount(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNBuyBook(
      _tradePairId: BytesLike,
      nPrice: BigNumberish,
      nOrder: BigNumberish,
      lastPrice: BigNumberish,
      lastOrder: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNSellBook(
      _tradePairId: BytesLike,
      nPrice: BigNumberish,
      nOrder: BigNumberish,
      lastPrice: BigNumberish,
      lastOrder: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrder(
      _orderUid: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSymbol(
      _tradePairId: BytesLike,
      _isBase: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTakerRate(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTradePairs(overrides?: CallOverrides): Promise<BigNumber>;

    matchAuctionOrders(
      _tradePairId: BytesLike,
      maxCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pauseAddOrder(
      _tradePairId: BytesLike,
      _allowAddOrder: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pauseTradePair(
      _tradePairId: BytesLike,
      _pairPaused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeOrderType(
      _tradePairId: BytesLike,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAllowedSlippagePercent(
      _tradePairId: BytesLike,
      _allowedSlippagePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAuctionMode(
      _tradePairId: BytesLike,
      _mode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAuctionPrice(
      _tradePairId: BytesLike,
      _price: BigNumberish,
      _pct: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDisplayDecimals(
      _tradePairId: BytesLike,
      _displayDecimals: BigNumberish,
      _isBase: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxTradeAmount(
      _tradePairId: BytesLike,
      _maxTradeAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinTradeAmount(
      _tradePairId: BytesLike,
      _minTradeAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRate(
      _tradePairId: BytesLike,
      _rate: BigNumberish,
      _rateType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addOrder(
      _tradePairId: BytesLike,
      _price: BigNumberish,
      _quantity: BigNumberish,
      _side: BigNumberish,
      _type1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addOrderType(
      _tradePairId: BytesLike,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addTradePair(
      _tradePairId: BytesLike,
      _baseSymbol: BytesLike,
      _baseDecimals: BigNumberish,
      _baseDisplayDecimals: BigNumberish,
      _quoteSymbol: BytesLike,
      _quoteDecimals: BigNumberish,
      _quoteDisplayDecimals: BigNumberish,
      _minTradeAmount: BigNumberish,
      _maxTradeAmount: BigNumberish,
      _mode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelAllOrders(
      _tradePairId: BytesLike,
      _orderIds: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelOrder(
      _tradePairId: BytesLike,
      _orderId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelReplaceOrder(
      _tradePairId: BytesLike,
      _orderId: BytesLike,
      _price: BigNumberish,
      _quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllowedSlippagePercent(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuctionData(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDecimals(
      _tradePairId: BytesLike,
      _isBase: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDisplayDecimals(
      _tradePairId: BytesLike,
      _isBase: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMakerRate(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxTradeAmount(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinTradeAmount(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNBuyBook(
      _tradePairId: BytesLike,
      nPrice: BigNumberish,
      nOrder: BigNumberish,
      lastPrice: BigNumberish,
      lastOrder: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNSellBook(
      _tradePairId: BytesLike,
      nPrice: BigNumberish,
      nOrder: BigNumberish,
      lastPrice: BigNumberish,
      lastOrder: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrder(
      _orderUid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSymbol(
      _tradePairId: BytesLike,
      _isBase: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTakerRate(
      _tradePairId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTradePairs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    matchAuctionOrders(
      _tradePairId: BytesLike,
      maxCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pauseAddOrder(
      _tradePairId: BytesLike,
      _allowAddOrder: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pauseTradePair(
      _tradePairId: BytesLike,
      _pairPaused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeOrderType(
      _tradePairId: BytesLike,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAllowedSlippagePercent(
      _tradePairId: BytesLike,
      _allowedSlippagePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAuctionMode(
      _tradePairId: BytesLike,
      _mode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAuctionPrice(
      _tradePairId: BytesLike,
      _price: BigNumberish,
      _pct: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDisplayDecimals(
      _tradePairId: BytesLike,
      _displayDecimals: BigNumberish,
      _isBase: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxTradeAmount(
      _tradePairId: BytesLike,
      _maxTradeAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinTradeAmount(
      _tradePairId: BytesLike,
      _minTradeAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRate(
      _tradePairId: BytesLike,
      _rate: BigNumberish,
      _rateType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}