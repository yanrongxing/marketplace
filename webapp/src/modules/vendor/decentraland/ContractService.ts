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
console.log("network:",network);
export enum ContractName {
  MANA = 'MANA',
  MARKETPLACE = 'Marketplace',
  LEGACY_MARKETPLACE = 'LegacyMarketplace',
  BIDS = 'Bids',
  COLLECTION_STORE = 'CollectionStore',
  ERC721 = 'ERC721',
  ERC1155 = 'ERC1155',

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
  // Contract deployed by: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
// Mana: 0x5FbDB2315678afecb367f032d93F642f64180aa3
// Collection imp: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
// Collection Manager : 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
// Forwarder: 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
// Collection Factory: 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
// NFT Marketplace: 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
// bidContract: 0x0165878A594ca255338adfa4d48449f69242Eb8F
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
      // address: getContract(CN.Marketplace, ChainId.TEST).address,
      address:"0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      vendor: 'decentraland',
      category: null,
      network: Network.TEST,
      chainId: ChainId.TEST
    },
    {
      name: ContractName.BIDS,
      // address: getContract(CN.Bid, ChainId.TEST).address,
      address:"0x0165878A594ca255338adfa4d48449f69242Eb8F",
      vendor: 'decentraland',
      category: null,
      network: Network.TEST,
      chainId: ChainId.TEST
    },
    {
      name: ContractName.MANA,
      // address: getContract(CN.MANAToken, ChainId.TEST).address,
      address:"0x5FbDB2315678afecb367f032d93F642f64180aa3",
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
    },{
      name: ContractName.ERC721,
      address: '0x669b1Bb3665Abc2D4ce4A5402836A9E571E3C2e7',
      vendor: 'decentraland',
      category: 'wearable',
      network: Network.TEST,
      chainId: ChainId.TEST
    },
    {
      name: ContractName.ERC1155,
      address: '0x610178dA211FEF7D417bC0e6FeD39F05609AD788',
      vendor: 'decentraland',
      category: 'props',
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
  ],
  [AppNetwork.MATIC]: [
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
      // address: getContract(CN.Marketplace, ChainId.TEST).address,
      address:"0x91f6d91c1345707D57212371cFf12A62709E43BF",
      vendor: 'decentraland',
      category: null,
      network: Network.MATIC,
      chainId: ChainId.MATIC_MAINNET
    },
    {
      name: ContractName.BIDS,
      // address: getContract(CN.Bid, ChainId.TEST).address,
      address:"0x6fd3958d1b352fD8b18EA00e3Aee530D51556663",
      vendor: 'decentraland',
      category: null,
      network: Network.MATIC,
      chainId: ChainId.MATIC_MAINNET
    },
    {
      name: ContractName.MANA,
      // address: getContract(CN.MANAToken, ChainId.TEST).address,
      address:"0x60E57e4AD9af84A2E7424A2ecb5dCa0c328183EA",
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
    },{
      name: ContractName.ERC721,
      address: '0x0B96d89854aCDb0373A1A761BB6071D13E4f7be5',
      vendor: 'decentraland',
      category: 'wearable',
      network: Network.MATIC,
      chainId: ChainId.MATIC_MAINNET
    },
    {
      name: ContractName.ERC1155,
      address: '0x31f325A9D4E7e8E8A2E8b3f4a2eD20Fc4E907133',
      vendor: 'decentraland',
      category: 'props',
      network: Network.MATIC,
      chainId: ChainId.MATIC_MAINNET
    }
  ],
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
