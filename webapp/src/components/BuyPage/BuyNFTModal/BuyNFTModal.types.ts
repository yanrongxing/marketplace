import { Dispatch } from 'redux'
import { Order } from '@yanrongxing/schemas'
import { Wallet } from '@yanrongxing/dapps/dist/modules/wallet/types'
import { Authorization } from '@yanrongxing/dapps/dist/modules/authorization/types'
import { NFT } from '../../../modules/nft/types'
import {
  executeOrderRequest,
  ExecuteOrderRequestAction
} from '../../../modules/order/actions'

export type Props = {
  nft: NFT
  order: Order | null
  wallet: Wallet
  authorizations: Authorization[]
  isLoading: boolean
  isOwner: boolean
  hasInsufficientMANA: boolean
  onExecuteOrder: typeof executeOrderRequest
}

export type MapStateProps = Pick<Props, 'authorizations' | 'isLoading'>
export type MapDispatchProps = Pick<Props, 'onExecuteOrder'>
export type MapDispatch = Dispatch<ExecuteOrderRequestAction>
