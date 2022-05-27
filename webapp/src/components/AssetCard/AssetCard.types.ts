import { Order } from '@yanrongxing/schemas'
import { Asset } from '../../modules/asset/types'

export type Props = {
  asset: Asset
  price: string | null
  quantity: number | null
  order?: Order
  showListedTag?: boolean
}

export type MapStateProps = Pick<Props, 'showListedTag' | 'price' | 'quantity'>
export type MapDispatchProps = {}
export type OwnProps = Pick<Props, 'asset' | 'order'>
