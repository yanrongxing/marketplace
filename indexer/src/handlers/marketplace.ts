import {
  OrderCreated,
  OrderSuccessful,
  OrderCancelled,
} from '../entities/Marketplace/Marketplace'
import { Order, NFT } from '../entities/schema'
import {
  getNFTId,
  updateNFTOrderProperties,
  cancelActiveOrder,
} from '../modules/nft'
import { getCategory } from '../modules/category'
import { buildCountFromOrder } from '../modules/count'
import * as status from '../modules/order/status'
import { ORDER_SALE_TYPE, trackSale } from '../modules/analytics'
import * as categories from '../modules/category/categories'

export function handleOrderCreated(event: OrderCreated): void {
  let category = getCategory(event.params.tokenAddress.toHexString())
  let nftId = getNFTId(
    category,
    event.params.tokenAddress.toHexString(),
    event.params.tokenId.toString(),
    event.params.seller.toHexString()
  )

  let nft = NFT.load(nftId)
  if (nft != null) {
    let orderId = event.params.id.toHex()

    let order = new Order(orderId)
    order.marketplaceAddress = event.address
    order.status = status.OPEN
    order.category = category
    order.nft = nftId
    order.nftAddress = event.params.tokenAddress
    order.tokenId = event.params.tokenId
    order.txHash = event.transaction.hash
    order.owner = event.params.seller
    order.price = event.params.priceInWei
    order.expiresAt = event.params.expiresAt
    order.blockNumber = event.block.number
    order.createdAt = event.block.timestamp
    order.updatedAt = event.block.timestamp
    order.quantity = event.params.quantity
    order.save()

    if(nft.activeOrder){
      cancelActiveOrder(nft, event.block.timestamp)
    }
    nft.updatedAt = event.block.timestamp
    nft = updateNFTOrderProperties(nft, order)
    nft.save()

    let count = buildCountFromOrder(order)
    count.save()
  }
}

export function handleOrderSuccessful(event: OrderSuccessful): void {
  let category = getCategory(event.params.tokenAddress.toHexString())
  let nftId = getNFTId(
    category,
    event.params.tokenAddress.toHexString(),
    event.params.tokenId.toString(),
    event.params.seller.toHexString()
  )
  let orderId = event.params.id.toHex()

  let order = Order.load(orderId)
  if (order == null) {
    return
  }
  order.quantity = order.quantity.minus(event.params.quantity);
  order.category = category
  if(order.quantity.toI32() <= 0){
    order.status = status.SOLD
  }
  
  order.buyer = event.params.buyer
  order.blockNumber = event.block.number
  order.updatedAt = event.block.timestamp
  order.save()
  let nft = NFT.load(nftId)
  if (!nft) {
    return
  }
  if(category !== categories.PROPS){
    nft.owner = event.params.buyer.toHex()
  }
  nft.updatedAt = event.block.timestamp
  nft = updateNFTOrderProperties(nft, order)
  nft.save()

  // analytics
  trackSale(
    ORDER_SALE_TYPE,
    event.params.buyer,
    event.params.seller,
    nft.id,
    order.price,
    event.params.quantity,
    event.block.timestamp,
    event.transaction.hash
  )
}

export function handleOrderCancelled(event: OrderCancelled): void {
  let category = getCategory(event.params.tokenAddress.toHexString())
  let nftId = getNFTId(
    category,
    event.params.tokenAddress.toHexString(),
    event.params.tokenId.toString(),
    event.params.seller.toHexString()
  )
  let orderId = event.params.id.toHex()

  let nft = NFT.load(nftId)
  let order = Order.load(orderId)

  if (nft != null && order != null) {
    order.category = category
    order.status = status.CANCELLED
    order.blockNumber = event.block.number
    order.updatedAt = event.block.timestamp
    order.save()

    nft.updatedAt = event.block.timestamp
    nft = updateNFTOrderProperties(nft, order)
    nft.save()
  }
}
