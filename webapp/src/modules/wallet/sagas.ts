import { takeEvery, all, put } from 'redux-saga/effects'
import { ChainId, Network, NFTCategory } from '@yanrongxing/schemas'
import { ContractName } from '@yanrongxing/transactions'
import { createWalletSaga } from '@yanrongxing/dapps/dist/modules/wallet/sagas'
import {
  ConnectWalletSuccessAction,
  CONNECT_WALLET_SUCCESS,
  ChangeAccountAction,
  ChangeNetworkAction,
  CHANGE_ACCOUNT,
  CHANGE_NETWORK
} from '@yanrongxing/dapps/dist/modules/wallet/actions'
import { fetchAuthorizationsRequest } from '@yanrongxing/dapps/dist/modules/authorization/actions'
import {
  Authorization,
  AuthorizationType
} from '@yanrongxing/dapps/dist/modules/authorization/types'
import { getContractNames } from '../vendor'
import { contracts, getContract } from '../contract/utils'
import { isPartner } from '../vendor/utils'
import { TRANSACTIONS_API_URL } from './utils'

const baseWalletSaga = createWalletSaga({
  CHAIN_ID: Number(process.env.REACT_APP_CHAIN_ID) || ChainId.ETHEREUM_MAINNET,
  POLL_INTERVAL: 0,
  TRANSACTIONS_API_URL
})

export function* walletSaga() {
  yield all([baseWalletSaga(), fullWalletSaga()])
}

function* fullWalletSaga() {
  yield takeEvery(CONNECT_WALLET_SUCCESS, handleWallet)
  yield takeEvery(CHANGE_ACCOUNT, handleWallet)
  yield takeEvery(CHANGE_NETWORK, handleWallet)
}

function* handleWallet(
  action: ConnectWalletSuccessAction | ChangeAccountAction | ChangeNetworkAction
) {
  const { address } = action.payload.wallet

  const contractNames = getContractNames()



  const marketplace = getContract({
    name: contractNames.MARKETPLACE,
    network: Network.TEST
  })



  const bids = getContract({
    name: contractNames.BIDS,
    network: Network.TEST
  })



  const mana = getContract({
    name: contractNames.MANA,
    network: Network.TEST
  })



  const authorizations: Authorization[] = []

  authorizations.push({
    address,
    authorizedAddress: marketplace.address,
    contractAddress: mana.address,
    contractName: ContractName.MANAToken,
    chainId: mana.chainId,
    type: AuthorizationType.ALLOWANCE
  })


  authorizations.push({
    address,
    authorizedAddress: bids.address,
    contractAddress: mana.address,
    contractName: ContractName.MANAToken,
    chainId: mana.chainId,
    type: AuthorizationType.ALLOWANCE
  })



  for (const contract of contracts.filter(c => c.category !== null)) {
    
    const marketplace = getContract({
      name:
        contract.vendor && isPartner(contract.vendor)
          ? contractNames.MARKETPLACE_ADAPTER
          : contractNames.MARKETPLACE,
      network: contract.network
    })!
    if(!marketplace){
      continue
    }
    // Skip SuperRare contract since it's not ERC721 compliant (lacks approveForAll)
    if (contract.name === contractNames.SUPER_RARE) {
      continue
    }
    let tokenContract = ContractName.ERC721;
    switch(contract.category){
      case NFTCategory.WEARABLE:
        tokenContract = ContractName.ERC721CollectionV2
        break
      case NFTCategory.PROPS:
        tokenContract = ContractName.ERC1155
        break
    }

    authorizations.push({
      address,
      authorizedAddress: marketplace.address,
      contractAddress: contract.address,
      contractName:tokenContract,
      chainId: contract.chainId,
      type: AuthorizationType.APPROVAL
    })
  }

  yield put(fetchAuthorizationsRequest(authorizations))
}
