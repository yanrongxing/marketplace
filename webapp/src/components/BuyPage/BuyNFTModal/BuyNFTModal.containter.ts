import { connect } from 'react-redux'
import {
  getData as getAuthorizations,
  getLoading as getLoadingAuthorizations
} from '@yanrongxing/dapps/dist/modules/authorization/selectors'
import { isLoadingType } from '@yanrongxing/dapps/dist/modules/loading/selectors'
import { FETCH_AUTHORIZATIONS_REQUEST } from '@yanrongxing/dapps/dist/modules/authorization/actions'
import { RootState } from '../../../modules/reducer'
import {
  executeOrderRequest,
  EXECUTE_ORDER_REQUEST
} from '../../../modules/order/actions'
import { getLoading as getLoadingOrders } from '../../../modules/order/selectors'
import {
  MapStateProps,
  MapDispatchProps,
  MapDispatch
} from './BuyNFTModal.types'
import BuyNFTModal from './BuyNFTModal'

const mapState = (state: RootState): MapStateProps => ({
  authorizations: getAuthorizations(state),
  isLoading:
    isLoadingType(
      getLoadingAuthorizations(state),
      FETCH_AUTHORIZATIONS_REQUEST
    ) || isLoadingType(getLoadingOrders(state), EXECUTE_ORDER_REQUEST)
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onExecuteOrder: (order, nft,quantity,fingerprint) =>
    dispatch(executeOrderRequest(order, nft, quantity,fingerprint))
})
export default connect(mapState, mapDispatch)(BuyNFTModal)
