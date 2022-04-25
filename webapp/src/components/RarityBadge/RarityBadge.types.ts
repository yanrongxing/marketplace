import { NFTCategory, Rarity } from '@yanrongxing/schemas'
import { AssetType } from '../../modules/asset/types'

export type Props = {
  rarity: Rarity
  assetType: AssetType
  category: NFTCategory
  size: 'medium' | 'small'
  withTooltip: boolean
  onClick: () => void
}

export type MapDispatchProps = Pick<Props, 'onClick'>
export type OwnProps = Pick<Props, 'rarity' | 'category' | 'assetType'>
