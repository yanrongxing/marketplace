import { Dispatch } from 'redux'
import { Item } from '@yanrongxing/schemas'
import { Wallet } from '@yanrongxing/dapps/dist/modules/wallet/types'
import { Authorization } from '@yanrongxing/dapps/dist/modules/authorization/types'
import {
  buyItemRequest,
  BuyItemRequestAction
} from '../../../modules/item/actions'

export type Props = {
  item: Item
  wallet: Wallet
  authorizations: Authorization[]
  isLoading: boolean
  isOwner: boolean
  hasInsufficientMANA: boolean
  onBuyItem: typeof buyItemRequest
}

export type MapStateProps = Pick<Props, 'authorizations' | 'isLoading'>
export type MapDispatchProps = Pick<Props, 'onBuyItem'>
export type MapDispatch = Dispatch<BuyItemRequestAction>
