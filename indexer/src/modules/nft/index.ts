import { log, BigInt,Address } from '@graphprotocol/graph-ts'

import { NFT, Order, Bid } from '../../entities/schema'
import { ERC1155 } from '../../entities/ERC1155/ERC1155'
import { ERC721, Transfer } from '../../entities/templates/ERC721/ERC721'
import * as status from '../order/status'
import * as addresses from '../../data/addresses'
import * as categories from '../category/categories'

export function isMint(event: Transfer): boolean {
  return event.params.from.toHexString() == addresses.Null
}

export function isZero(address:Address): boolean {
  return address.toHexString() == addresses.Null
}

export function getNFTId(
  category: string,
  contractAddress: string,
  tokenId: string,
  userAddress:string
): string {
  if(!userAddress || category != categories.PROPS){
    userAddress = ''
  }
  let id = category + '-' + contractAddress + '-' + tokenId
  if(userAddress != null && userAddress.length > 0){
    id += '-'+ userAddress
  }
  return  id 
}

export function getTokenURI(event: Transfer): string {
  let erc721 = ERC721.bind(event.address)
  let tokenURICallResult = erc721.try_tokenURI(event.params.tokenId)

  let tokenURI = ''

  if (tokenURICallResult.reverted) {
    log.warning('tokenURI reverted for tokenID: {} contract: {}', [
      event.params.tokenId.toString(),
      event.address.toHexString()
    ])
  } else {
    tokenURI = tokenURICallResult.value
  }

  return tokenURI
}

export function getURI(category: string,contractAddress: Address,tokenId: BigInt): string {
  // let erc721 = ERC721.bind(event.address)
  // let tokenURICallResult = erc721.try_tokenURI(event.params.tokenId)

  // let tokenURI = ''

  // if (tokenURICallResult.reverted) {
  //   log.warning('tokenURI reverted for tokenID: {} contract: {}', [
  //     event.params.tokenId.toString(),
  //     event.address.toHexString()
  //   ])
  // } else {
  //   tokenURI = tokenURICallResult.value
  // }

  let tokenURI = ''
  if(category === categories.PROPS){
    let erc1155 = ERC1155.bind(contractAddress)
    let tokenURICallResult = erc1155.try_uri(tokenId)
    let tokenURI = ''

    if (tokenURICallResult.reverted) {
      log.warning('uri reverted for tokenID: {} contract: {}', [
        tokenId.toString(),
        contractAddress.toHexString()
      ])
    } else {
      tokenURI = tokenURICallResult.value+contractAddress.toHexString()+"/"+tokenId.toString();
    }
  }else{
  let erc721 = ERC721.bind(contractAddress)
  let tokenURICallResult = erc721.try_tokenURI(tokenId)

  let tokenURI = ''

  if (tokenURICallResult.reverted) {
    log.warning('tokenURI reverted for tokenID: {} contract: {}', [
      tokenId.toString(),
      contractAddress.toHexString()
    ])
  } else {
    tokenURI = tokenURICallResult.value
  }
  }

  return tokenURI
}

export function updateNFTOrderProperties(nft: NFT, order: Order): NFT {
  if (order.status == status.OPEN) {
    return addNFTOrderProperties(nft, order)
  } else if (order.status == status.SOLD || order.status == status.CANCELLED) {
    return clearNFTOrderProperties(nft)
  } else {
    return nft
  }
}

export function addNFTOrderProperties(nft: NFT, order: Order): NFT {
  nft.activeOrder = order.id
  nft.searchOrderStatus = order.status
  nft.searchOrderPrice = order.price
  nft.searchOrderCreatedAt = order.createdAt
  nft.searchOrderExpiresAt = order.expiresAt
  return nft
}

export function clearNFTOrderProperties(nft: NFT): NFT {
  nft.activeOrder = ''
  nft.searchOrderStatus = null
  nft.searchOrderPrice = null
  nft.searchOrderCreatedAt = null
  nft.searchOrderExpiresAt = null
  return nft
}

export function cancelActiveOrder(nft: NFT, now: BigInt): boolean {
  let oldOrder = Order.load(nft.activeOrder)

  if (oldOrder != null && oldOrder.status == status.OPEN) {
    // Here we are setting old orders as cancelled, because the smart contract allows new orders to be created
    // and they just overwrite them in place. But the subgraph stores all orders ever
    // you can also overwrite ones that are expired
    oldOrder.status = status.CANCELLED
    oldOrder.updatedAt = now
    oldOrder.save()

    return true
  }
  return false
}


export function cancelERC1155ActiveOrder(nft: NFT, now: BigInt,quantity:BigInt,operator:Address): boolean {
  let oldOrder = Order.load(nft.activeOrder)
  
  if(operator.toHexString() == oldOrder.marketplaceAddress.toHexString()){
    
    return false
  }
  let balance =  nft.balance;
  let remainBalance = balance.minus(quantity);
  if(remainBalance < oldOrder.quantity && oldOrder != null && oldOrder.status == status.OPEN){
    oldOrder.status = status.CANCELLED
    oldOrder.updatedAt = now
    oldOrder.save()
    return true
  }
  
  return false
}