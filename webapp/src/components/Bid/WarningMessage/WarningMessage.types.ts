import { Bid } from '@yanrongxing/schemas'
import { NFT } from '../../../modules/nft/types'

export type Props = {
  nft: NFT | null
  bid: Bid
}
