import { Bid, Order } from '@yanrongxing/schemas'
import { Wallet } from '@yanrongxing/dapps/dist/modules//wallet/types'
import { NFT } from '../../../modules/nft/types'

export type Props = {
  wallet: Wallet | null
  nft: NFT
  order: Order | null
  bids: Bid[]
}

export type MapStateProps = Pick<Props, 'wallet' | 'order' | 'bids'>
export type MapDispatchProps = {}
export type MapDispatch = {}
export type OwnProps = Pick<Props, 'nft'>
