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

export interface RewardDistributionInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'DEFAULT_ADMIN_ROLE'
      | 'REWARD_SENDER_ROLE'
      | 'distributeReward'
      | 'distributeRewards'
      | 'getRoleAdmin'
      | 'grantRole'
      | 'hasRole'
      | 'renounceRole'
      | 'revokeRole'
      | 'setRewardTreasury'
      | 'supportsInterface'
      | 'token',
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | 'RewardDistributed'
      | 'RoleAdminChanged'
      | 'RoleGranted'
      | 'RoleRevoked',
  ): EventFragment;

  encodeFunctionData(
    functionFragment: 'DEFAULT_ADMIN_ROLE',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'REWARD_SENDER_ROLE',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'distributeReward',
    values: [AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'distributeRewards',
    values: [AddressLike[], BigNumberish[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getRoleAdmin',
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'grantRole',
    values: [BytesLike, AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'hasRole',
    values: [BytesLike, AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'renounceRole',
    values: [BytesLike, AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'revokeRole',
    values: [BytesLike, AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'setRewardTreasury',
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'token', values?: undefined): string;

  decodeFunctionResult(
    functionFragment: 'DEFAULT_ADMIN_ROLE',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'REWARD_SENDER_ROLE',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'distributeReward',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'distributeRewards',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getRoleAdmin',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceRole',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setRewardTreasury',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'supportsInterface',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
}

export namespace RewardDistributedEvent {
  export type InputTuple = [recipient: AddressLike, amount: BigNumberish];
  export type OutputTuple = [recipient: string, amount: bigint];
  export interface OutputObject {
    recipient: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike,
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string,
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike,
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike,
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RewardDistribution extends BaseContract {
  connect(runner?: ContractRunner | null): RewardDistribution;
  waitForDeployment(): Promise<this>;

  interface: RewardDistributionInterface;

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

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], 'view'>;

  REWARD_SENDER_ROLE: TypedContractMethod<[], [string], 'view'>;

  distributeReward: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [void],
    'nonpayable'
  >;

  distributeRewards: TypedContractMethod<
    [recipients: AddressLike[], amounts: BigNumberish[]],
    [void],
    'nonpayable'
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], 'view'>;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    'nonpayable'
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    'view'
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    'nonpayable'
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    'nonpayable'
  >;

  setRewardTreasury: TypedContractMethod<
    [_rewardTreasury: AddressLike],
    [void],
    'nonpayable'
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    'view'
  >;

  token: TypedContractMethod<[], [string], 'view'>;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment,
  ): T;

  getFunction(
    nameOrSignature: 'DEFAULT_ADMIN_ROLE',
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'REWARD_SENDER_ROLE',
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'distributeReward',
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'distributeRewards',
  ): TypedContractMethod<
    [recipients: AddressLike[], amounts: BigNumberish[]],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'getRoleAdmin',
  ): TypedContractMethod<[role: BytesLike], [string], 'view'>;
  getFunction(
    nameOrSignature: 'grantRole',
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'hasRole',
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    'view'
  >;
  getFunction(
    nameOrSignature: 'renounceRole',
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'revokeRole',
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'setRewardTreasury',
  ): TypedContractMethod<[_rewardTreasury: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'supportsInterface',
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'token',
  ): TypedContractMethod<[], [string], 'view'>;

  getEvent(
    key: 'RewardDistributed',
  ): TypedContractEvent<
    RewardDistributedEvent.InputTuple,
    RewardDistributedEvent.OutputTuple,
    RewardDistributedEvent.OutputObject
  >;
  getEvent(
    key: 'RoleAdminChanged',
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: 'RoleGranted',
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: 'RoleRevoked',
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;

  filters: {
    'RewardDistributed(address,uint256)': TypedContractEvent<
      RewardDistributedEvent.InputTuple,
      RewardDistributedEvent.OutputTuple,
      RewardDistributedEvent.OutputObject
    >;
    RewardDistributed: TypedContractEvent<
      RewardDistributedEvent.InputTuple,
      RewardDistributedEvent.OutputTuple,
      RewardDistributedEvent.OutputObject
    >;

    'RoleAdminChanged(bytes32,bytes32,bytes32)': TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    'RoleGranted(bytes32,address,address)': TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    'RoleRevoked(bytes32,address,address)': TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
  };
}
