import { Wallet } from '@yanrongxing/dapps/dist/modules/wallet/types'
import { Order } from '@yanrongxing/schemas'
import { Authorization } from '@yanrongxing/dapps/dist/modules/authorization/types'
import { NFT } from '../../../modules/nft/types'
import { createOrderRequest } from '../../../modules/order/actions'

export type Props = {
  nft: NFT
  order: Order | null
  wallet: Wallet | null
  authorizations: Authorization[]
  isLoading: boolean
  isCreatingOrder: boolean
  onNavigate: (path: string) => void
  onCreateOrder: typeof createOrderRequest
}
