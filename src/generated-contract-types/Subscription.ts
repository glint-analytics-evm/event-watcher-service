/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from 'ethers';
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from './common';

export declare namespace Subscription {
  export type UserSubscriptionStruct = {
    startTime: BigNumberish;
    endTime: BigNumberish;
  };

  export type UserSubscriptionStructOutput = [
    startTime: bigint,
    endTime: bigint,
  ] & { startTime: bigint; endTime: bigint };
}

export interface SubscriptionInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'DAY'
      | 'MAX_SUBSCRIPTION_LENGTH'
      | 'addMultiTimePeriodForToken'
      | 'addSingleTimePeriodForToken'
      | 'getAvailableTimePeriodsForToken'
      | 'getTokenTimePeriodPrice'
      | 'getUserSubscription'
      | 'owner'
      | 'removeAllTimePeriodForToken'
      | 'removeSingleTimePeriodForToken'
      | 'renounceOwnership'
      | 'subscribe'
      | 'transferOwnership'
      | 'withdraw',
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | 'ExtendSubscription'
      | 'OwnershipTransferred'
      | 'Subscribe'
      | 'TokenPeriodAdded'
      | 'TokenPeriodRemoved',
  ): EventFragment;

  encodeFunctionData(functionFragment: 'DAY', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'MAX_SUBSCRIPTION_LENGTH',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'addMultiTimePeriodForToken',
    values: [AddressLike, BigNumberish[], BigNumberish[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'addSingleTimePeriodForToken',
    values: [AddressLike, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'getAvailableTimePeriodsForToken',
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'getTokenTimePeriodPrice',
    values: [AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'getUserSubscription',
    values: [AddressLike],
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'removeAllTimePeriodForToken',
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'removeSingleTimePeriodForToken',
    values: [AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'subscribe',
    values: [AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [AddressLike, AddressLike],
  ): string;

  decodeFunctionResult(functionFragment: 'DAY', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'MAX_SUBSCRIPTION_LENGTH',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'addMultiTimePeriodForToken',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'addSingleTimePeriodForToken',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAvailableTimePeriodsForToken',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getTokenTimePeriodPrice',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getUserSubscription',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'removeAllTimePeriodForToken',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'removeSingleTimePeriodForToken',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'subscribe', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
}

export namespace ExtendSubscriptionEvent {
  export type InputTuple = [
    user: AddressLike,
    token: AddressLike,
    period: BigNumberish,
  ];
  export type OutputTuple = [user: string, token: string, period: bigint];
  export interface OutputObject {
    user: string;
    token: string;
    period: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SubscribeEvent {
  export type InputTuple = [
    user: AddressLike,
    token: AddressLike,
    period: BigNumberish,
  ];
  export type OutputTuple = [user: string, token: string, period: bigint];
  export interface OutputObject {
    user: string;
    token: string;
    period: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenPeriodAddedEvent {
  export type InputTuple = [
    token: AddressLike,
    period: BigNumberish,
    price: BigNumberish,
  ];
  export type OutputTuple = [token: string, period: bigint, price: bigint];
  export interface OutputObject {
    token: string;
    period: bigint;
    price: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenPeriodRemovedEvent {
  export type InputTuple = [token: AddressLike, period: BigNumberish];
  export type OutputTuple = [token: string, period: bigint];
  export interface OutputObject {
    token: string;
    period: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Subscription extends BaseContract {
  connect(runner?: ContractRunner | null): Subscription;
  waitForDeployment(): Promise<this>;

  interface: SubscriptionInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent,
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent,
  ): Promise<this>;

  DAY: TypedContractMethod<[], [bigint], 'view'>;

  MAX_SUBSCRIPTION_LENGTH: TypedContractMethod<[], [bigint], 'view'>;

  addMultiTimePeriodForToken: TypedContractMethod<
    [token: AddressLike, timePeriodDays: BigNumberish[], price: BigNumberish[]],
    [void],
    'nonpayable'
  >;

  addSingleTimePeriodForToken: TypedContractMethod<
    [token: AddressLike, timePeriodDays: BigNumberish, price: BigNumberish],
    [void],
    'nonpayable'
  >;

  getAvailableTimePeriodsForToken: TypedContractMethod<
    [token: AddressLike],
    [bigint[]],
    'view'
  >;

  getTokenTimePeriodPrice: TypedContractMethod<
    [token: AddressLike, timePeriodDays: BigNumberish],
    [bigint],
    'view'
  >;

  getUserSubscription: TypedContractMethod<
    [user: AddressLike],
    [Subscription.UserSubscriptionStructOutput],
    'view'
  >;

  owner: TypedContractMethod<[], [string], 'view'>;

  removeAllTimePeriodForToken: TypedContractMethod<
    [token: AddressLike],
    [void],
    'nonpayable'
  >;

  removeSingleTimePeriodForToken: TypedContractMethod<
    [token: AddressLike, timePeriodDays: BigNumberish],
    [void],
    'nonpayable'
  >;

  renounceOwnership: TypedContractMethod<[], [void], 'nonpayable'>;

  subscribe: TypedContractMethod<
    [token: AddressLike, timePeriodDays: BigNumberish],
    [void],
    'nonpayable'
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    'nonpayable'
  >;

  withdraw: TypedContractMethod<
    [token: AddressLike, to: AddressLike],
    [void],
    'nonpayable'
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment,
  ): T;

  getFunction(
    nameOrSignature: 'DAY',
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'MAX_SUBSCRIPTION_LENGTH',
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'addMultiTimePeriodForToken',
  ): TypedContractMethod<
    [token: AddressLike, timePeriodDays: BigNumberish[], price: BigNumberish[]],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'addSingleTimePeriodForToken',
  ): TypedContractMethod<
    [token: AddressLike, timePeriodDays: BigNumberish, price: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'getAvailableTimePeriodsForToken',
  ): TypedContractMethod<[token: AddressLike], [bigint[]], 'view'>;
  getFunction(
    nameOrSignature: 'getTokenTimePeriodPrice',
  ): TypedContractMethod<
    [token: AddressLike, timePeriodDays: BigNumberish],
    [bigint],
    'view'
  >;
  getFunction(
    nameOrSignature: 'getUserSubscription',
  ): TypedContractMethod<
    [user: AddressLike],
    [Subscription.UserSubscriptionStructOutput],
    'view'
  >;
  getFunction(
    nameOrSignature: 'owner',
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'removeAllTimePeriodForToken',
  ): TypedContractMethod<[token: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'removeSingleTimePeriodForToken',
  ): TypedContractMethod<
    [token: AddressLike, timePeriodDays: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'renounceOwnership',
  ): TypedContractMethod<[], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'subscribe',
  ): TypedContractMethod<
    [token: AddressLike, timePeriodDays: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'transferOwnership',
  ): TypedContractMethod<[newOwner: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'withdraw',
  ): TypedContractMethod<
    [token: AddressLike, to: AddressLike],
    [void],
    'nonpayable'
  >;

  getEvent(
    key: 'ExtendSubscription',
  ): TypedContractEvent<
    ExtendSubscriptionEvent.InputTuple,
    ExtendSubscriptionEvent.OutputTuple,
    ExtendSubscriptionEvent.OutputObject
  >;
  getEvent(
    key: 'OwnershipTransferred',
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: 'Subscribe',
  ): TypedContractEvent<
    SubscribeEvent.InputTuple,
    SubscribeEvent.OutputTuple,
    SubscribeEvent.OutputObject
  >;
  getEvent(
    key: 'TokenPeriodAdded',
  ): TypedContractEvent<
    TokenPeriodAddedEvent.InputTuple,
    TokenPeriodAddedEvent.OutputTuple,
    TokenPeriodAddedEvent.OutputObject
  >;
  getEvent(
    key: 'TokenPeriodRemoved',
  ): TypedContractEvent<
    TokenPeriodRemovedEvent.InputTuple,
    TokenPeriodRemovedEvent.OutputTuple,
    TokenPeriodRemovedEvent.OutputObject
  >;

  filters: {
    'ExtendSubscription(address,address,uint256)': TypedContractEvent<
      ExtendSubscriptionEvent.InputTuple,
      ExtendSubscriptionEvent.OutputTuple,
      ExtendSubscriptionEvent.OutputObject
    >;
    ExtendSubscription: TypedContractEvent<
      ExtendSubscriptionEvent.InputTuple,
      ExtendSubscriptionEvent.OutputTuple,
      ExtendSubscriptionEvent.OutputObject
    >;

    'OwnershipTransferred(address,address)': TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    'Subscribe(address,address,uint256)': TypedContractEvent<
      SubscribeEvent.InputTuple,
      SubscribeEvent.OutputTuple,
      SubscribeEvent.OutputObject
    >;
    Subscribe: TypedContractEvent<
      SubscribeEvent.InputTuple,
      SubscribeEvent.OutputTuple,
      SubscribeEvent.OutputObject
    >;

    'TokenPeriodAdded(address,uint256,uint256)': TypedContractEvent<
      TokenPeriodAddedEvent.InputTuple,
      TokenPeriodAddedEvent.OutputTuple,
      TokenPeriodAddedEvent.OutputObject
    >;
    TokenPeriodAdded: TypedContractEvent<
      TokenPeriodAddedEvent.InputTuple,
      TokenPeriodAddedEvent.OutputTuple,
      TokenPeriodAddedEvent.OutputObject
    >;

    'TokenPeriodRemoved(address,uint256)': TypedContractEvent<
      TokenPeriodRemovedEvent.InputTuple,
      TokenPeriodRemovedEvent.OutputTuple,
      TokenPeriodRemovedEvent.OutputObject
    >;
    TokenPeriodRemoved: TypedContractEvent<
      TokenPeriodRemovedEvent.InputTuple,
      TokenPeriodRemovedEvent.OutputTuple,
      TokenPeriodRemovedEvent.OutputObject
    >;
  };
}
