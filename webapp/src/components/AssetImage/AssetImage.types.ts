import { Dispatch } from 'redux'
import { Avatar } from '@yanrongxing/schemas'
import { Item } from '@yanrongxing/schemas'
import { NFT } from '../../modules/nft/types'
import {
  setIsTryingOn,
  SetIsTryingOnAction
} from '../../modules/ui/preview/actions'

export type Props = {
  asset: NFT | Item
  className?: string
  isDraggable?: boolean
  withNavigation?: boolean
  hasPopup?: boolean
  zoom?: number
  isSmall?: boolean
  showMonospace?: boolean
  avatar?: Avatar
  isTryingOn: boolean
  onSetIsTryingOn: typeof setIsTryingOn
}

export type MapStateProps = Pick<Props, 'avatar' | 'isTryingOn'>
export type MapDispatchProps = Pick<Props, 'onSetIsTryingOn'>
export type MapDispatch = Dispatch<SetIsTryingOnAction>
