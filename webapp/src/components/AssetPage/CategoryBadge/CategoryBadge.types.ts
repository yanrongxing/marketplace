import { NFT } from '@yanrongxing/schemas'
import { AssetType } from '../../../modules/asset/types'

export type Props = {
  wearable: Required<NFT['data']>['wearable'] | undefined
  props: Required<NFT['data']>['props'] | undefined
  assetType: AssetType
  onClick: () => void
}

export type MapDispatchProps = Pick<Props, 'onClick'>
export type OwnProps = Pick<Props, 'wearable' | 'assetType' | 'props'>
