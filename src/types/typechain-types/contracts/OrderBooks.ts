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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface OrderBooksInterface extends utils.Interface {
  functions: {
    "VERSION()": FunctionFragment;
    "addOrder(bytes32,bytes32,uint256)": FunctionFragment;
    "cancelOrder(bytes32,bytes32,uint256)": FunctionFragment;
    "exists(bytes32,uint256)": FunctionFragment;
    "first(bytes32)": FunctionFragment;
    "getBookSize(bytes32)": FunctionFragment;
    "getHead(bytes32,uint256)": FunctionFragment;
    "getNOrders(bytes32,uint256,uint256,uint256,bytes32,uint256)": FunctionFragment;
    "getNOrdersOld(bytes32,uint256,uint256)": FunctionFragment;
    "getNode(bytes32,uint256)": FunctionFragment;
    "getQuantitiesAtPrice(bytes32,uint256)": FunctionFragment;
    "initialize()": FunctionFragment;
    "last(bytes32)": FunctionFragment;
    "matchTrade(bytes32,uint256,uint256,uint256)": FunctionFragment;
    "next(bytes32,uint256)": FunctionFragment;
    "nextOrder(bytes32,uint256,bytes32)": FunctionFragment;
    "nextPrice(bytes32,uint8,uint256)": FunctionFragment;
    "orderListExists(bytes32,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "prev(bytes32,uint256)": FunctionFragment;
    "removeFirstOrder(bytes32,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "root(bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "VERSION"
      | "addOrder"
      | "cancelOrder"
      | "exists"
      | "first"
      | "getBookSize"
      | "getHead"
      | "getNOrders"
      | "getNOrdersOld"
      | "getNode"
      | "getQuantitiesAtPrice"
      | "initialize"
      | "last"
      | "matchTrade"
      | "next"
      | "nextOrder"
      | "nextPrice"
      | "orderListExists"
      | "owner"
      | "prev"
      | "removeFirstOrder"
      | "renounceOwnership"
      | "root"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addOrder",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exists",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "first", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getBookSize",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getHead",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNOrders",
    values: [
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getNOrdersOld",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNode",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getQuantitiesAtPrice",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "last", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "matchTrade",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "next",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextOrder",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "nextPrice",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "orderListExists",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "prev",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFirstOrder",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "root", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addOrder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "first", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBookSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getHead", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNOrders", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNOrdersOld",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getQuantitiesAtPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "last", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "matchTrade", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "next", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "orderListExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prev", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeFirstOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface OrderBooks extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OrderBooksInterface;

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
    VERSION(overrides?: CallOverrides): Promise<[string]>;

    addOrder(
      _orderBookID: BytesLike,
      _orderUid: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelOrder(
      _orderBookID: BytesLike,
      _orderUid: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exists(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _exists: boolean }>;

    first(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _price: BigNumber }>;

    getBookSize(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getHead(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { head: string }>;

    getNOrders(
      _orderBookID: BytesLike,
      nPrice: BigNumberish,
      nOrder: BigNumberish,
      lastPrice: BigNumberish,
      lastOrder: BytesLike,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber, string] & {
        prices: BigNumber[];
        quantities: BigNumber[];
      }
    >;

    getNOrdersOld(
      _orderBookID: BytesLike,
      n: BigNumberish,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]]>;

    getNode(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        BigNumber
      ] & {
        price: BigNumber;
        parent: BigNumber;
        left: BigNumber;
        right: BigNumber;
        red: boolean;
        head: string;
        size: BigNumber;
      }
    >;

    getQuantitiesAtPrice(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    last(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _price: BigNumber }>;

    matchTrade(
      _orderBookID: BytesLike,
      price: BigNumberish,
      takerOrderRemainingQuantity: BigNumberish,
      makerOrderRemainingQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    next(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _price: BigNumber }>;

    nextOrder(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      _orderId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { nextId: string }>;

    nextPrice(
      _orderBookID: BytesLike,
      _side: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { price: BigNumber }>;

    orderListExists(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    prev(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _price: BigNumber }>;

    removeFirstOrder(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    root(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _price: BigNumber }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  VERSION(overrides?: CallOverrides): Promise<string>;

  addOrder(
    _orderBookID: BytesLike,
    _orderUid: BytesLike,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelOrder(
    _orderBookID: BytesLike,
    _orderUid: BytesLike,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exists(
    _orderBookID: BytesLike,
    price: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  first(_orderBookID: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  getBookSize(
    _orderBookID: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getHead(
    _orderBookID: BytesLike,
    price: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getNOrders(
    _orderBookID: BytesLike,
    nPrice: BigNumberish,
    nOrder: BigNumberish,
    lastPrice: BigNumberish,
    lastOrder: BytesLike,
    _type: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber[], BigNumber, string] & {
      prices: BigNumber[];
      quantities: BigNumber[];
    }
  >;

  getNOrdersOld(
    _orderBookID: BytesLike,
    n: BigNumberish,
    _type: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber[], BigNumber[]]>;

  getNode(
    _orderBookID: BytesLike,
    _price: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, boolean, string, BigNumber] & {
      price: BigNumber;
      parent: BigNumber;
      left: BigNumber;
      right: BigNumber;
      red: boolean;
      head: string;
      size: BigNumber;
    }
  >;

  getQuantitiesAtPrice(
    _orderBookID: BytesLike,
    _price: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  last(_orderBookID: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  matchTrade(
    _orderBookID: BytesLike,
    price: BigNumberish,
    takerOrderRemainingQuantity: BigNumberish,
    makerOrderRemainingQuantity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  next(
    _orderBookID: BytesLike,
    price: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nextOrder(
    _orderBookID: BytesLike,
    _price: BigNumberish,
    _orderId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  nextPrice(
    _orderBookID: BytesLike,
    _side: BigNumberish,
    _price: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  orderListExists(
    _orderBookID: BytesLike,
    _price: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  prev(
    _orderBookID: BytesLike,
    price: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeFirstOrder(
    _orderBookID: BytesLike,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  root(_orderBookID: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    VERSION(overrides?: CallOverrides): Promise<string>;

    addOrder(
      _orderBookID: BytesLike,
      _orderUid: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelOrder(
      _orderBookID: BytesLike,
      _orderUid: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    exists(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    first(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBookSize(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHead(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getNOrders(
      _orderBookID: BytesLike,
      nPrice: BigNumberish,
      nOrder: BigNumberish,
      lastPrice: BigNumberish,
      lastOrder: BytesLike,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber, string] & {
        prices: BigNumber[];
        quantities: BigNumber[];
      }
    >;

    getNOrdersOld(
      _orderBookID: BytesLike,
      n: BigNumberish,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]]>;

    getNode(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        BigNumber
      ] & {
        price: BigNumber;
        parent: BigNumber;
        left: BigNumber;
        right: BigNumber;
        red: boolean;
        head: string;
        size: BigNumber;
      }
    >;

    getQuantitiesAtPrice(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    initialize(overrides?: CallOverrides): Promise<void>;

    last(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    matchTrade(
      _orderBookID: BytesLike,
      price: BigNumberish,
      takerOrderRemainingQuantity: BigNumberish,
      makerOrderRemainingQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    next(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextOrder(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      _orderId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    nextPrice(
      _orderBookID: BytesLike,
      _side: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orderListExists(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    prev(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeFirstOrder(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    root(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    addOrder(
      _orderBookID: BytesLike,
      _orderUid: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelOrder(
      _orderBookID: BytesLike,
      _orderUid: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exists(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    first(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBookSize(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHead(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNOrders(
      _orderBookID: BytesLike,
      nPrice: BigNumberish,
      nOrder: BigNumberish,
      lastPrice: BigNumberish,
      lastOrder: BytesLike,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNOrdersOld(
      _orderBookID: BytesLike,
      n: BigNumberish,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNode(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getQuantitiesAtPrice(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    last(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    matchTrade(
      _orderBookID: BytesLike,
      price: BigNumberish,
      takerOrderRemainingQuantity: BigNumberish,
      makerOrderRemainingQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    next(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextOrder(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      _orderId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextPrice(
      _orderBookID: BytesLike,
      _side: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orderListExists(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    prev(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeFirstOrder(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    root(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addOrder(
      _orderBookID: BytesLike,
      _orderUid: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelOrder(
      _orderBookID: BytesLike,
      _orderUid: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exists(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    first(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBookSize(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getHead(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNOrders(
      _orderBookID: BytesLike,
      nPrice: BigNumberish,
      nOrder: BigNumberish,
      lastPrice: BigNumberish,
      lastOrder: BytesLike,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNOrdersOld(
      _orderBookID: BytesLike,
      n: BigNumberish,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNode(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getQuantitiesAtPrice(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    last(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    matchTrade(
      _orderBookID: BytesLike,
      price: BigNumberish,
      takerOrderRemainingQuantity: BigNumberish,
      makerOrderRemainingQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    next(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextOrder(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      _orderId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextPrice(
      _orderBookID: BytesLike,
      _side: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orderListExists(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prev(
      _orderBookID: BytesLike,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeFirstOrder(
      _orderBookID: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    root(
      _orderBookID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
