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

export class ImplementationSet extends ethereum.Event {
  get params(): ImplementationSet__Params {
    return new ImplementationSet__Params(this);
  }
}

export class ImplementationSet__Params {
  _event: ImplementationSet;

  constructor(event: ImplementationSet) {
    this._event = event;
  }

  get _implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _codeHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get _code(): Bytes {
    return this._event.parameters[2].value.toBytes();
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

export class ProxyCreated extends ethereum.Event {
  get params(): ProxyCreated__Params {
    return new ProxyCreated__Params(this);
  }
}

export class ProxyCreated__Params {
  _event: ProxyCreated;

  constructor(event: ProxyCreated) {
    this._event = event;
  }

  get _address(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _salt(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class createCollectionEvent extends ethereum.Event {
  get params(): createCollectionEvent__Params {
    return new createCollectionEvent__Params(this);
  }
}

export class createCollectionEvent__Params {
  _event: createCollectionEvent;

  constructor(event: createCollectionEvent) {
    this._event = event;
  }

  get _addr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _isCollectionFromFactory(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class ERC721CollectionFactoryV2 extends ethereum.SmartContract {
  static bind(address: Address): ERC721CollectionFactoryV2 {
    return new ERC721CollectionFactoryV2("ERC721CollectionFactoryV2", address);
  }

  code(): Bytes {
    let result = super.call("code", "code():(bytes)", []);

    return result[0].toBytes();
  }

  try_code(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("code", "code():(bytes)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  codeHash(): Bytes {
    let result = super.call("codeHash", "codeHash():(bytes32)", []);

    return result[0].toBytes();
  }

  try_codeHash(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("codeHash", "codeHash():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  collections(param0: BigInt): Address {
    let result = super.call("collections", "collections(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_collections(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "collections",
      "collections(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  collectionsSize(): BigInt {
    let result = super.call(
      "collectionsSize",
      "collectionsSize():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_collectionsSize(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "collectionsSize",
      "collectionsSize():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createCollection(_salt: Bytes, _data: Bytes): Address {
    let result = super.call(
      "createCollection",
      "createCollection(bytes32,bytes):(address)",
      [ethereum.Value.fromFixedBytes(_salt), ethereum.Value.fromBytes(_data)]
    );

    return result[0].toAddress();
  }

  try_createCollection(
    _salt: Bytes,
    _data: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createCollection",
      "createCollection(bytes32,bytes):(address)",
      [ethereum.Value.fromFixedBytes(_salt), ethereum.Value.fromBytes(_data)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAddress(_salt: Bytes, _address: Address, _data: Bytes): Address {
    let result = super.call(
      "getAddress",
      "getAddress(bytes32,address,bytes):(address)",
      [
        ethereum.Value.fromFixedBytes(_salt),
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromBytes(_data)
      ]
    );

    return result[0].toAddress();
  }

  try_getAddress(
    _salt: Bytes,
    _address: Address,
    _data: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAddress",
      "getAddress(bytes32,address,bytes):(address)",
      [
        ethereum.Value.fromFixedBytes(_salt),
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromBytes(_data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isCollectionFromFactory(param0: Address): boolean {
    let result = super.call(
      "isCollectionFromFactory",
      "isCollectionFromFactory(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_isCollectionFromFactory(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isCollectionFromFactory",
      "isCollectionFromFactory(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get _implementation(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateCollectionCall extends ethereum.Call {
  get inputs(): CreateCollectionCall__Inputs {
    return new CreateCollectionCall__Inputs(this);
  }

  get outputs(): CreateCollectionCall__Outputs {
    return new CreateCollectionCall__Outputs(this);
  }
}

export class CreateCollectionCall__Inputs {
  _call: CreateCollectionCall;

  constructor(call: CreateCollectionCall) {
    this._call = call;
  }

  get _salt(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class CreateCollectionCall__Outputs {
  _call: CreateCollectionCall;

  constructor(call: CreateCollectionCall) {
    this._call = call;
  }

  get addr(): Address {
    return this._call.outputValues[0].value.toAddress();
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
