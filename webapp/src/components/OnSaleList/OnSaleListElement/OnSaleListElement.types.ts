import { Item, Order } from '@yanrongxing/schemas'
import { NFT } from '../../../modules/nft/types'
import { VendorName } from '../../../modules/vendor'

export type Props = {
  item?: Item
  nft?: NFT<VendorName.DECENTRALAND>
  order?: Order
}
