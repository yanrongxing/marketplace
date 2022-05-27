import { Asset } from '../../../modules/asset/types'

export type Props = {
  asset: Asset
  price?: string
  quantity?: number
}

export type MapStateProps = Pick<Props, 'price' | 'quantity'>
export type OwnProps = Pick<Props, 'asset'>
