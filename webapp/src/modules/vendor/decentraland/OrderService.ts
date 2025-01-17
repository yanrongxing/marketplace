import { utils } from 'ethers'
import { ListingStatus, Order } from '@yanrongxing/schemas'
import {
  ContractName,
  getContract,
  getContractName
} from '@yanrongxing/transactions'
import { Wallet } from '@yanrongxing/dapps/dist/modules/wallet/types'
import { sendTransaction } from '@yanrongxing/dapps/dist/modules/wallet/utils'
import { NFT } from '../../nft/types'
import { orderAPI } from './order/api'
import { VendorName } from '../types'
import { OrderService as OrderServiceInterface } from '../services'

export class OrderService
  implements OrderServiceInterface<VendorName.DECENTRALAND> {
  fetchByNFT(nft: NFT, status?: ListingStatus): Promise<Order[]> {
    return orderAPI.fetchByNFT(nft.contractAddress, nft.tokenId, status)
  }


  async create(
    _wallet: Wallet | null,
    nft: NFT,
    price: number,
    expiresAt: number,
    quantity:number | 0
  ) {
    const contract = getContract(ContractName.MarketplaceV3,
      nft.chainId
    )
    return sendTransaction(contract, marketplace =>
      marketplace.createOrder(
        nft.contractAddress,
        nft.tokenId,
        utils.parseEther(price.toString()),
        expiresAt,
        quantity
      )
    )
  }

  async execute(
    _wallet: Wallet | null,
    nft: NFT,
    order: Order,
    quantity:number | 0,
    fingerprint?: string
  ) {
    const contractName = getContractName(order.marketplaceAddress)
    const contract = getContract(contractName, order.chainId)
    console.log(nft.contractAddress)
    if (fingerprint) {
      return sendTransaction(contract, marketplace =>
        marketplace.safeExecuteOrder(
          order.id,
          quantity,
          fingerprint
        )
      )
    } else {
      return sendTransaction(contract, marketplace =>
        marketplace.executeOrder(order.id,quantity)
      )
    }
  }

  async cancel(_wallet: Wallet | null, order: Order) {
    const contractName = getContractName(order.marketplaceAddress)
    const contract = getContract(contractName, order.chainId)
    return sendTransaction(contract, marketplace =>
      marketplace.cancelOrder(order.id)
    )
  }

  canSell() {
    return true
  }
}
