import { Authorization } from '@yanrongxing/dapps/dist/modules/authorization/types'
import { Wallet } from '@yanrongxing/dapps/dist/modules/wallet/types'
import { NFT } from '../../../modules/nft/types'
import { placeBidRequest } from '../../../modules/bid/actions'

export type Props = {
  nft: NFT
  wallet: Wallet | null
  authorizations: Authorization[]
  onNavigate: (path: string) => void
  onPlaceBid: typeof placeBidRequest
  isPlacingBid: boolean
}
