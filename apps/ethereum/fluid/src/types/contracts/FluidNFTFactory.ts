/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface FluidNFTFactoryInterface extends utils.Interface {
  contractName: "FluidNFTFactory";
  functions: {
    "createInstance(string,string,address,address,address)": FunctionFragment;
    "getProxy(address)": FunctionFragment;
    "masterContract()": FunctionFragment;
    "tenants(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createInstance",
    values: [string, string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "getProxy", values: [string]): string;
  encodeFunctionData(
    functionFragment: "masterContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tenants", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "createInstance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getProxy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "masterContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tenants", data: BytesLike): Result;

  events: {};
}

export interface FluidNFTFactory extends BaseContract {
  contractName: "FluidNFTFactory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FluidNFTFactoryInterface;

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
    createInstance(
      name: string,
      symbol: string,
      host: string,
      cfa: string,
      acceptedToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getProxy(_tenant: string, overrides?: CallOverrides): Promise<[string]>;

    masterContract(overrides?: CallOverrides): Promise<[string]>;

    tenants(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { nft: string; owner: string }>;
  };

  createInstance(
    name: string,
    symbol: string,
    host: string,
    cfa: string,
    acceptedToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getProxy(_tenant: string, overrides?: CallOverrides): Promise<string>;

  masterContract(overrides?: CallOverrides): Promise<string>;

  tenants(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[string, string] & { nft: string; owner: string }>;

  callStatic: {
    createInstance(
      name: string,
      symbol: string,
      host: string,
      cfa: string,
      acceptedToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getProxy(_tenant: string, overrides?: CallOverrides): Promise<string>;

    masterContract(overrides?: CallOverrides): Promise<string>;

    tenants(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { nft: string; owner: string }>;
  };

  filters: {};

  estimateGas: {
    createInstance(
      name: string,
      symbol: string,
      host: string,
      cfa: string,
      acceptedToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getProxy(_tenant: string, overrides?: CallOverrides): Promise<BigNumber>;

    masterContract(overrides?: CallOverrides): Promise<BigNumber>;

    tenants(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createInstance(
      name: string,
      symbol: string,
      host: string,
      cfa: string,
      acceptedToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getProxy(
      _tenant: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    masterContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tenants(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
