import { Dispatch } from 'redux'
import { CallHistoryMethodAction } from 'connected-react-router'
import { Bid } from '@yanrongxing/schemas'
import { Wallet } from '@yanrongxing/dapps/dist/modules/wallet/types'
import {
  CancelBidRequestAction,
  ArchiveBidAction,
  UnarchiveBidAction,
  AcceptBidRequestAction,
  cancelBidRequest,
  archiveBid,
  acceptBidRequest,
  unarchiveBid
} from '../../modules/bid/actions'

export type Props = {
  bid: Bid
  wallet: Wallet | null
  archivedBidIds: string[]
  isArchivable?: boolean
  hasImage?: boolean
  onUpdate: (bid: Bid) => void
  onCancel: typeof cancelBidRequest
  onArchive: typeof archiveBid
  onUnarchive: typeof unarchiveBid
  onAccept: typeof acceptBidRequest
  isAcceptingBid: boolean
}

export type MapStateProps = Pick<
  Props,
  'archivedBidIds' | 'wallet' | 'isAcceptingBid'
>
export type MapDispatchProps = Pick<
  Props,
  'onUpdate' | 'onCancel' | 'onArchive' | 'onUnarchive' | 'onAccept'
>
export type MapDispatch = Dispatch<
  | CallHistoryMethodAction
  | CancelBidRequestAction
  | ArchiveBidAction
  | UnarchiveBidAction
  | AcceptBidRequestAction
>

export type OwnProps = Pick<Props, 'bid' | 'isArchivable' | 'hasImage'>
