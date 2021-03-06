/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface TestBytes32LinkedListLibraryInterface extends utils.Interface {
  functions: {
    "getAdjacent(bytes32,bool)": FunctionFragment;
    "getNode(bytes32)": FunctionFragment;
    "insert(bytes32,bytes32,bool)": FunctionFragment;
    "listExists()": FunctionFragment;
    "nodeExists(bytes32)": FunctionFragment;
    "pop(bool)": FunctionFragment;
    "push(bytes32,bool)": FunctionFragment;
    "remove(bytes32)": FunctionFragment;
    "sizeOf()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAdjacent"
      | "getNode"
      | "insert"
      | "listExists"
      | "nodeExists"
      | "pop"
      | "push"
      | "remove"
      | "sizeOf"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAdjacent",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(functionFragment: "getNode", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "insert",
    values: [BytesLike, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "listExists",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nodeExists",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "pop", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "push",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(functionFragment: "remove", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "sizeOf", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "getAdjacent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "insert", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listExists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nodeExists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pop", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "push", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sizeOf", data: BytesLike): Result;

  events: {};
}

export interface TestBytes32LinkedListLibrary extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestBytes32LinkedListLibraryInterface;

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
    getAdjacent(
      _node: BytesLike,
      _direction: boolean,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;

    getNode(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string, string]>;

    insert(
      _node: BytesLike,
      _new: BytesLike,
      _direction: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    listExists(overrides?: CallOverrides): Promise<[boolean]>;

    nodeExists(_node: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    pop(
      _direction: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    push(
      _node: BytesLike,
      _direction: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remove(
      _node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sizeOf(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getAdjacent(
    _node: BytesLike,
    _direction: boolean,
    overrides?: CallOverrides
  ): Promise<[boolean, string]>;

  getNode(
    _node: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, string, string]>;

  insert(
    _node: BytesLike,
    _new: BytesLike,
    _direction: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  listExists(overrides?: CallOverrides): Promise<boolean>;

  nodeExists(_node: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  pop(
    _direction: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  push(
    _node: BytesLike,
    _direction: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remove(
    _node: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sizeOf(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getAdjacent(
      _node: BytesLike,
      _direction: boolean,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;

    getNode(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string, string]>;

    insert(
      _node: BytesLike,
      _new: BytesLike,
      _direction: boolean,
      overrides?: CallOverrides
    ): Promise<boolean>;

    listExists(overrides?: CallOverrides): Promise<boolean>;

    nodeExists(_node: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    pop(_direction: boolean, overrides?: CallOverrides): Promise<string>;

    push(
      _node: BytesLike,
      _direction: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    remove(_node: BytesLike, overrides?: CallOverrides): Promise<string>;

    sizeOf(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getAdjacent(
      _node: BytesLike,
      _direction: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNode(_node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    insert(
      _node: BytesLike,
      _new: BytesLike,
      _direction: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    listExists(overrides?: CallOverrides): Promise<BigNumber>;

    nodeExists(_node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    pop(
      _direction: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    push(
      _node: BytesLike,
      _direction: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remove(
      _node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sizeOf(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAdjacent(
      _node: BytesLike,
      _direction: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNode(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    insert(
      _node: BytesLike,
      _new: BytesLike,
      _direction: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    listExists(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nodeExists(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pop(
      _direction: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    push(
      _node: BytesLike,
      _direction: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remove(
      _node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sizeOf(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
