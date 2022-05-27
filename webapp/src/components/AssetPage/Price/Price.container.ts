import { connect } from 'react-redux'
import { MapStateProps, OwnProps } from './Price.types'
import Price from './Price'
import { RootState } from '../../../modules/reducer'
import { getCurrentOrder } from '../../../modules/order/selectors'
import { Item } from '@yanrongxing/schemas'

const mapState = (state: RootState, { asset }: OwnProps): MapStateProps => {
  let price: string | undefined
  let quantity: number | undefined

  if ('price' in asset) {
    price = (asset as Item).price
  }
  

  if ('activeOrderId' in asset) {
    price = getCurrentOrder(state)?.price
    quantity = getCurrentOrder(state)?.quantity
  }


  return {
    price,quantity
  }
}

export default connect(mapState)(Price)
