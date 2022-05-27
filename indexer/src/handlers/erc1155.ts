import { Address, BigInt } from '@graphprotocol/graph-ts'
import { TransferSingle,TransferBatch } from '../entities/ERC1155/ERC1155'
import { NFT, Parcel, Estate, Order, ENS, Wearable,Props } from '../entities/schema'
import {
  isMint,
  getNFTId,
  getTokenURI,
  getURI,
  cancelActiveOrder,
  clearNFTOrderProperties,
  cancelERC1155ActiveOrder,
} from '../modules/nft'

import { buildPropsFromNFT, getPropsImage } from '../modules/props'
import { toLowerCase } from '../modules/utils'
import * as categories from '../modules/category/categories'
import { createOrLoadAccount } from '../modules/account'

export function handleTransfer(event: TransferSingle): void {
  if (event.params.id.toString() == '') {
    return
  }
  
  handleTransferFn(
    event.address,
    event.params.operator,
    event.params.from,
    event.params.to,
    event.params.id,
    event.params.value,
    event.block.timestamp
  );

}

export function handleTransferFn(contractAddress: Address,operator: Address,from: Address,to: Address,id:BigInt,value:BigInt,timestamp:BigInt):void{

  let category = categories.PROPS;
  let toId = getNFTId(
    category,
    contractAddress.toHexString(),
    id.toString(),
    to.toHexString()
  )
  let fromId = getNFTId(
    category,
    contractAddress.toHexString(),
    id.toString(),
    from.toHexString()
  )

  let toNft = new NFT(toId)

  toNft.tokenId = id
  toNft.owner = to.toHex()
  toNft.contractAddress = contractAddress
  toNft.category = category
  toNft.updatedAt = timestamp
  toNft.soldAt = null
  toNft.sales = 0
  toNft.volume = BigInt.fromI32(0)
  toNft.tokenURI = getURI(category,contractAddress,id);

  let oldToNFT = NFT.load(toId)
  let oldFromNFT = NFT.load(fromId)

  
  if(oldFromNFT){
    oldFromNFT.balance = oldFromNFT.balance.minus(value);
    
    //删除原账号的订单
    if (cancelERC1155ActiveOrder(oldFromNFT!, timestamp,value,operator)) {
      oldFromNFT = clearNFTOrderProperties(oldFromNFT!)
    }
    oldFromNFT.save();
  }

  let props: Props
  if (!oldToNFT) {
    toNft.createdAt = timestamp

    // We're defaulting "Estate size" to one to allow the frontend to search for `searchEstateSize_gt: 0`,
    // necessary because thegraph doesn't support complex queries and we can't do `OR` operations
    toNft.searchEstateSize = 1

    // We default the "in bounds" property for parcels and no-parcels alike so we can just add  `searchParcelIsInBounds: true`
    // to all queries
    toNft.searchParcelIsInBounds = true

    toNft.searchIsLand = false

    toNft.balance = value;

    props = buildPropsFromNFT(toNft)
    toNft.props = toId;
    toNft.name = props.name;
    toNft.image = getPropsImage(toNft)
    toNft.searchText = toLowerCase(props.name)
    props.save()
  }else{
    //如果原收款账号存在，增加余额
    toNft.balance = oldToNFT.balance.plus(value);
  }
  
  createOrLoadAccount(to)
  toNft.save()
}

export function handleTransfers(event: TransferBatch): void {
  // handleTransfer()
  let ids = event.params.ids
  let values = event.params.values
  for (let index = 0; index < ids.length; index++) {
    let id = ids[index];
    let value = values[index];
    handleTransferFn(
      event.address,
      event.params.operator,
      event.params.from,
      event.params.to,
      id,
      value,
      event.block.timestamp
    );
  }


  
}
