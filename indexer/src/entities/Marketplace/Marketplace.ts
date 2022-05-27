// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ChangedFeesCollectorCutPerMillion extends ethereum.Event {
  get params(): ChangedFeesCollectorCutPerMillion__Params {
    return new ChangedFeesCollectorCutPerMillion__Params(this);
  }
}

export class ChangedFeesCollectorCutPerMillion__Params {
  _event: ChangedFeesCollectorCutPerMillion;

  constructor(event: ChangedFeesCollectorCutPerMillion) {
    this._event = event;
  }

  get feesCollectorCutPerMillion(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ChangedPublicationFee extends ethereum.Event {
  get params(): ChangedPublicationFee__Params {
    return new ChangedPublicationFee__Params(this);
  }
}

export class ChangedPublicationFee__Params {
  _event: ChangedPublicationFee;

  constructor(event: ChangedPublicationFee) {
    this._event = event;
  }

  get publicationFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class FeesCollectorSet extends ethereum.Event {
  get params(): FeesCollectorSet__Params {
    return new FeesCollectorSet__Params(this);
  }
}

export class FeesCollectorSet__Params {
  _event: FeesCollectorSet;

  constructor(event: FeesCollectorSet) {
    this._event = event;
  }

  get oldFeesCollector(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newFeesCollector(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class MetaTransactionExecuted extends ethereum.Event {
  get params(): MetaTransactionExecuted__Params {
    return new MetaTransactionExecuted__Params(this);
  }
}

export class MetaTransactionExecuted__Params {
  _event: MetaTransactionExecuted;

  constructor(event: MetaTransactionExecuted) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get relayerAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get functionSignature(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class OrderCancelled extends ethereum.Event {
  get params(): OrderCancelled__Params {
    return new OrderCancelled__Params(this);
  }
}

export class OrderCancelled__Params {
  _event: OrderCancelled;

  constructor(event: OrderCancelled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get quantity(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class OrderCreated extends ethereum.Event {
  get params(): OrderCreated__Params {
    return new OrderCreated__Params(this);
  }
}

export class OrderCreated__Params {
  _event: OrderCreated;

  constructor(event: OrderCreated) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get priceInWei(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get expiresAt(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class OrderSuccessful extends ethereum.Event {
  get params(): OrderSuccessful__Params {
    return new OrderSuccessful__Params(this);
  }
}

export class OrderSuccessful__Params {
  _event: OrderSuccessful;

  constructor(event: OrderSuccessful) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get quantity(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Marketplace__orderByIdResult {
  value0: Bytes;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;

  constructor(
    value0: Bytes,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    return map;
  }
}

export class Marketplace extends ethereum.SmartContract {
  static bind(address: Address): Marketplace {
    return new Marketplace("Marketplace", address);
  }

  ERC1155_Interface(): Bytes {
    let result = super.call(
      "ERC1155_Interface",
      "ERC1155_Interface():(bytes4)",
      []
    );

    return result[0].toBytes();
  }

  try_ERC1155_Interface(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "ERC1155_Interface",
      "ERC1155_Interface():(bytes4)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  ERC721_Interface(): Bytes {
    let result = super.call(
      "ERC721_Interface",
      "ERC721_Interface():(bytes4)",
      []
    );

    return result[0].toBytes();
  }

  try_ERC721_Interface(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "ERC721_Interface",
      "ERC721_Interface():(bytes4)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  InterfaceId_ValidateFingerprint(): Bytes {
    let result = super.call(
      "InterfaceId_ValidateFingerprint",
      "InterfaceId_ValidateFingerprint():(bytes4)",
      []
    );

    return result[0].toBytes();
  }

  try_InterfaceId_ValidateFingerprint(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "InterfaceId_ValidateFingerprint",
      "InterfaceId_ValidateFingerprint():(bytes4)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  acceptedToken(): Address {
    let result = super.call("acceptedToken", "acceptedToken():(address)", []);

    return result[0].toAddress();
  }

  try_acceptedToken(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "acceptedToken",
      "acceptedToken():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  domainSeparator(): Bytes {
    let result = super.call(
      "domainSeparator",
      "domainSeparator():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_domainSeparator(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "domainSeparator",
      "domainSeparator():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  feesCollector(): Address {
    let result = super.call("feesCollector", "feesCollector():(address)", []);

    return result[0].toAddress();
  }

  try_feesCollector(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "feesCollector",
      "feesCollector():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feesCollectorCutPerMillion(): BigInt {
    let result = super.call(
      "feesCollectorCutPerMillion",
      "feesCollectorCutPerMillion():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_feesCollectorCutPerMillion(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "feesCollectorCutPerMillion",
      "feesCollectorCutPerMillion():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getChainId(): BigInt {
    let result = super.call("getChainId", "getChainId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getChainId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getChainId", "getChainId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNonce(user: Address): BigInt {
    let result = super.call("getNonce", "getNonce(address):(uint256)", [
      ethereum.Value.fromAddress(user)
    ]);

    return result[0].toBigInt();
  }

  try_getNonce(user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getNonce", "getNonce(address):(uint256)", [
      ethereum.Value.fromAddress(user)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  orderById(param0: Bytes): Marketplace__orderByIdResult {
    let result = super.call(
      "orderById",
      "orderById(bytes32):(bytes32,address,address,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new Marketplace__orderByIdResult(
      result[0].toBytes(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt()
    );
  }

  try_orderById(
    param0: Bytes
  ): ethereum.CallResult<Marketplace__orderByIdResult> {
    let result = super.tryCall(
      "orderById",
      "orderById(bytes32):(bytes32,address,address,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Marketplace__orderByIdResult(
        value[0].toBytes(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  publicationFeeInWei(): BigInt {
    let result = super.call(
      "publicationFeeInWei",
      "publicationFeeInWei():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_publicationFeeInWei(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "publicationFeeInWei",
      "publicationFeeInWei():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _feesCollector(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _acceptedToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _feesCollectorCutPerMillion(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelOrderCall extends ethereum.Call {
  get inputs(): CancelOrderCall__Inputs {
    return new CancelOrderCall__Inputs(this);
  }

  get outputs(): CancelOrderCall__Outputs {
    return new CancelOrderCall__Outputs(this);
  }
}

export class CancelOrderCall__Inputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CancelOrderCall__Outputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }
}

export class CreateOrderCall extends ethereum.Call {
  get inputs(): CreateOrderCall__Inputs {
    return new CreateOrderCall__Inputs(this);
  }

  get outputs(): CreateOrderCall__Outputs {
    return new CreateOrderCall__Outputs(this);
  }
}

export class CreateOrderCall__Inputs {
  _call: CreateOrderCall;

  constructor(call: CreateOrderCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get priceInWei(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get expiresAt(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class CreateOrderCall__Outputs {
  _call: CreateOrderCall;

  constructor(call: CreateOrderCall) {
    this._call = call;
  }
}

export class ExecuteMetaTransactionCall extends ethereum.Call {
  get inputs(): ExecuteMetaTransactionCall__Inputs {
    return new ExecuteMetaTransactionCall__Inputs(this);
  }

  get outputs(): ExecuteMetaTransactionCall__Outputs {
    return new ExecuteMetaTransactionCall__Outputs(this);
  }
}

export class ExecuteMetaTransactionCall__Inputs {
  _call: ExecuteMetaTransactionCall;

  constructor(call: ExecuteMetaTransactionCall) {
    this._call = call;
  }

  get userAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get functionSignature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get sigR(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get sigS(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get sigV(): i32 {
    return this._call.inputValues[4].value.toI32();
  }
}

export class ExecuteMetaTransactionCall__Outputs {
  _call: ExecuteMetaTransactionCall;

  constructor(call: ExecuteMetaTransactionCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ExecuteOrderCall extends ethereum.Call {
  get inputs(): ExecuteOrderCall__Inputs {
    return new ExecuteOrderCall__Inputs(this);
  }

  get outputs(): ExecuteOrderCall__Outputs {
    return new ExecuteOrderCall__Outputs(this);
  }
}

export class ExecuteOrderCall__Inputs {
  _call: ExecuteOrderCall;

  constructor(call: ExecuteOrderCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ExecuteOrderCall__Outputs {
  _call: ExecuteOrderCall;

  constructor(call: ExecuteOrderCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeExecuteOrderCall extends ethereum.Call {
  get inputs(): SafeExecuteOrderCall__Inputs {
    return new SafeExecuteOrderCall__Inputs(this);
  }

  get outputs(): SafeExecuteOrderCall__Outputs {
    return new SafeExecuteOrderCall__Outputs(this);
  }
}

export class SafeExecuteOrderCall__Inputs {
  _call: SafeExecuteOrderCall;

  constructor(call: SafeExecuteOrderCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get fingerprint(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SafeExecuteOrderCall__Outputs {
  _call: SafeExecuteOrderCall;

  constructor(call: SafeExecuteOrderCall) {
    this._call = call;
  }
}

export class SetFeesCollectorCall extends ethereum.Call {
  get inputs(): SetFeesCollectorCall__Inputs {
    return new SetFeesCollectorCall__Inputs(this);
  }

  get outputs(): SetFeesCollectorCall__Outputs {
    return new SetFeesCollectorCall__Outputs(this);
  }
}

export class SetFeesCollectorCall__Inputs {
  _call: SetFeesCollectorCall;

  constructor(call: SetFeesCollectorCall) {
    this._call = call;
  }

  get _newFeesCollector(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeesCollectorCall__Outputs {
  _call: SetFeesCollectorCall;

  constructor(call: SetFeesCollectorCall) {
    this._call = call;
  }
}

export class SetFeesCollectorCutPerMillionCall extends ethereum.Call {
  get inputs(): SetFeesCollectorCutPerMillionCall__Inputs {
    return new SetFeesCollectorCutPerMillionCall__Inputs(this);
  }

  get outputs(): SetFeesCollectorCutPerMillionCall__Outputs {
    return new SetFeesCollectorCutPerMillionCall__Outputs(this);
  }
}

export class SetFeesCollectorCutPerMillionCall__Inputs {
  _call: SetFeesCollectorCutPerMillionCall;

  constructor(call: SetFeesCollectorCutPerMillionCall) {
    this._call = call;
  }

  get _feesCollectorCutPerMillion(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeesCollectorCutPerMillionCall__Outputs {
  _call: SetFeesCollectorCutPerMillionCall;

  constructor(call: SetFeesCollectorCutPerMillionCall) {
    this._call = call;
  }
}

export class SetPublicationFeeCall extends ethereum.Call {
  get inputs(): SetPublicationFeeCall__Inputs {
    return new SetPublicationFeeCall__Inputs(this);
  }

  get outputs(): SetPublicationFeeCall__Outputs {
    return new SetPublicationFeeCall__Outputs(this);
  }
}

export class SetPublicationFeeCall__Inputs {
  _call: SetPublicationFeeCall;

  constructor(call: SetPublicationFeeCall) {
    this._call = call;
  }

  get _publicationFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPublicationFeeCall__Outputs {
  _call: SetPublicationFeeCall;

  constructor(call: SetPublicationFeeCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
