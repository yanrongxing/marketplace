import { ChainId, Network } from '@yanrongxing/schemas'
import { getContract, ContractName as CN } from '@yanrongxing/transactions'
import {
  Contract,
  ContractService as ContractServiceInterface
} from '../services'
import { Network as AppNetwork } from '../../contract/types'
import { TransferType } from '../types'
// import { nftAPI } from './nft'

const network = process.env.REACT_APP_NETWORK! as AppNetwork

export enum ContractName {
  MANA = 'MANA',
  MARKETPLACE = 'Marketplace',
  LEGACY_MARKETPLACE = 'LegacyMarketplace',
  BIDS = 'Bids',
  COLLECTION_STORE = 'CollectionStore',
  TEST = 'TEST',

}

const contracts = ({
  [AppNetwork.ROPSTEN]: [
    {
      name: ContractName.MANA,
      address: getContract(CN.MANAToken, ChainId.ETHEREUM_ROPSTEN).address,
      vendor: 'decentraland',
      category: null,
      network: Network.ETHEREUM,
      chainId: ChainId.ETHEREUM_ROPSTEN
    },
    {
      name: ContractName.MARKETPLACE,
      address: getContract(CN.Marketplace, ChainId.ETHEREUM_ROPSTEN).address,
      vendor: 'decentraland',
      category: null,
      network: Network.ETHEREUM,
      chainId: ChainId.ETHEREUM_ROPSTEN
    },
    {
      name: ContractName.BIDS,
      address: getContract(CN.Bid, ChainId.ETHEREUM_ROPSTEN).address,
      vendor: 'decentraland',
      category: null,
      network: Network.ETHEREUM,
      chainId: ChainId.ETHEREUM_ROPSTEN
    },
    {
      name: ContractName.MANA,
      address: getContract(CN.MANAToken, ChainId.MATIC_MUMBAI).address,
      vendor: 'decentraland',
      category: null,
      network: Network.MATIC,
      chainId: ChainId.MATIC_MUMBAI
    },
    {
      name: ContractName.MARKETPLACE,
      address: getContract(CN.MarketplaceV2, ChainId.MATIC_MUMBAI).address,
      label: 'MarketplaceV2',
      vendor: 'decentraland',
      category: null,
      network: Network.MATIC,
      chainId: ChainId.MATIC_MUMBAI
    },
    {
      name: ContractName.LEGACY_MARKETPLACE,
      address: getContract(CN.Marketplace, ChainId.MATIC_MUMBAI).address,
      label: 'MarketplaceV1',
      vendor: 'decentraland',
      category: null,
      network: Network.MATIC,
      chainId: ChainId.MATIC_MUMBAI
    },
    {
      name: CN.CollectionStore,
      address: getContract(CN.CollectionStore, ChainId.MATIC_MUMBAI).address,
      vendor: 'decentraland',
      category: null,
      network: Network.MATIC,
      chainId: ChainId.MATIC_MUMBAI
    },
    {
      name: ContractName.BIDS,
      address: getContract(CN.BidV2, ChainId.MATIC_MUMBAI).address,
      vendor: 'decentraland',
      category: null,
      network: Network.MATIC,
      chainId: ChainId.MATIC_MUMBAI
    }
  ],
  [AppNetwork.MAINNET]: [
    {
      name: ContractName.MANA,
      address: getContract(CN.MANAToken, ChainId.ETHEREUM_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.ETHEREUM,
      chainId: ChainId.ETHEREUM_MAINNET
    },
    {
      name: ContractName.MARKETPLACE,
      address: getContract(CN.Marketplace, ChainId.ETHEREUM_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.ETHEREUM,
      chainId: ChainId.ETHEREUM_MAINNET
    },
    {
      name: ContractName.BIDS,
      address: getContract(CN.Bid, ChainId.ETHEREUM_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.ETHEREUM,
      chainId: ChainId.ETHEREUM_MAINNET
    },
    {
      name: ContractName.MANA,
      address: getContract(CN.MANAToken, ChainId.MATIC_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.MATIC,
      chainId: ChainId.MATIC_MAINNET
    },
    {
      name: ContractName.MARKETPLACE,
      address: getContract(CN.MarketplaceV2, ChainId.MATIC_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.MATIC,
      chainId: ChainId.MATIC_MAINNET
    },
    {
      name: ContractName.LEGACY_MARKETPLACE,
      address: getContract(CN.Marketplace, ChainId.MATIC_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.MATIC,
      chainId: ChainId.MATIC_MAINNET
    },
    {
      name: CN.CollectionStore,
      address: getContract(CN.CollectionStore, ChainId.MATIC_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.MATIC,
      chainId: ChainId.MATIC_MAINNET
    },
    {
      name: ContractName.BIDS,
      address: getContract(CN.BidV2, ChainId.MATIC_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.MATIC,
      chainId: ChainId.MATIC_MAINNET
    }
  ],
  [AppNetwork.TEST]: [
    {
      name: ContractName.MANA,
      address: getContract(CN.MANAToken, ChainId.TEST).address,
      vendor: 'decentraland',
      category: null,
      network: Network.TEST,
      chainId: ChainId.TEST
    },
    {
      name: ContractName.MARKETPLACE,
      address: getContract(CN.Marketplace, ChainId.TEST).address,
      vendor: 'decentraland',
      category: null,
      network: Network.TEST,
      chainId: ChainId.TEST
    },
    {
      name: ContractName.BIDS,
      address: getContract(CN.Bid, ChainId.TEST).address,
      vendor: 'decentraland',
      category: null,
      network: Network.TEST,
      chainId: ChainId.TEST
    },
    {
      name: ContractName.MANA,
      address: getContract(CN.MANAToken, ChainId.TEST).address,
      vendor: 'decentraland',
      category: null,
      network: Network.TEST,
      chainId: ChainId.TEST
    },
    {
      name: ContractName.MARKETPLACE,
      address: getContract(CN.MarketplaceV2, ChainId.TEST).address,
      vendor: 'decentraland',
      category: null,
      network: Network.TEST,
      chainId: ChainId.TEST
    },
    {
      name: ContractName.LEGACY_MARKETPLACE,
      address: getContract(CN.Marketplace, ChainId.TEST).address,
      vendor: 'decentraland',
      category: null,
      network: Network.TEST,
      chainId: ChainId.TEST
    },
    {
      name: CN.CollectionStore,
      address: getContract(CN.CollectionStore, ChainId.TEST).address,
      vendor: 'decentraland',
      category: null,
      network: Network.TEST,
      chainId: ChainId.TEST
    },
    {
      name: ContractName.BIDS,
      address: getContract(CN.BidV2, ChainId.TEST).address,
      vendor: 'decentraland',
      category: null,
      network: Network.TEST,
      chainId: ChainId.TEST
    },    {
      name: ContractName.TEST,
      address: '0xe95fbea0ba0c541cd36b5b30cbe1d1ac9b938817',
      vendor: 'decentraland',
      category: 'wearable',
      network: Network.TEST,
      chainId: ChainId.TEST
    },
    {
      name: ContractName.TEST,
      address: '0x0476a7bd9f13f222b4c6c6fe60d3ba996c3e0c5f',
      vendor: 'decentraland',
      category: 'wearable',
      network: Network.TEST,
      chainId: ChainId.TEST
    }
  ],
  [AppNetwork.BSC]: [
    {
      name: ContractName.MANA,
      address: getContract(CN.MANAToken, ChainId.BSC_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.BSC,
      chainId: ChainId.BSC_MAINNET
    },
    {
      name: ContractName.MARKETPLACE,
      address: getContract(CN.Marketplace, ChainId.BSC_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.BSC,
      chainId: ChainId.BSC_MAINNET
    },
    {
      name: ContractName.BIDS,
      address: getContract(CN.Bid, ChainId.BSC_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.BSC,
      chainId: ChainId.BSC_MAINNET
    },
    {
      name: ContractName.MANA,
      address: getContract(CN.MANAToken, ChainId.BSC_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.BSC,
      chainId: ChainId.BSC_MAINNET
    },
    {
      name: ContractName.MARKETPLACE,
      address: getContract(CN.MarketplaceV2, ChainId.BSC_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.BSC,
      chainId: ChainId.BSC_MAINNET
    },
    {
      name: ContractName.LEGACY_MARKETPLACE,
      address: getContract(CN.Marketplace, ChainId.BSC_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.BSC,
      chainId: ChainId.BSC_MAINNET
    },
    {
      name: CN.CollectionStore,
      address: getContract(CN.CollectionStore, ChainId.BSC_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.BSC,
      chainId: ChainId.BSC_MAINNET
    },
    {
      name: ContractName.BIDS,
      address: getContract(CN.BidV2, ChainId.BSC_MAINNET).address,
      vendor: 'decentraland',
      category: null,
      network: Network.BSC,
      chainId: ChainId.BSC_MAINNET
    }
  ]
} as Record<AppNetwork, Contract[]>)[network]

export class ContractService implements ContractServiceInterface {
  contracts = contracts

  hasFetched = false
  
  async build() {
    if (this.hasFetched) {
      return
    }
    console.log(network);
    console.log(this.contracts);
    // const contracts = await nftAPI.fetchContracts()
    // for (const contract of contracts) {
    //   this.contracts.push(contract)
    // }

    this.hasFetched = true
  }

  getContracts() {
    return this.contracts
  }

  getTransferType(_address: string) {
    return TransferType.SAFE_TRANSFER_FROM
  }
}
