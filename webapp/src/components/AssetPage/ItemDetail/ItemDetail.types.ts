import { Item } from '@yanrongxing/schemas'
import { Wallet } from '@yanrongxing/dapps/dist/modules/wallet/types'

export type Props = {
  wallet: Wallet | null
  item: Item
}

export type MapStateProps = Pick<Props, 'wallet'>
export type MapDispatchProps = {}
export type MapDispatch = {}
