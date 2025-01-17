import { connect } from 'react-redux'
import {
  getData as getAuthorizations,
  getLoading as getLoadingAuthorizations
} from '@yanrongxing/dapps/dist/modules/authorization/selectors'
import { FETCH_AUTHORIZATIONS_REQUEST } from '@yanrongxing/dapps/dist/modules/authorization/actions'
import { isLoadingType } from '@yanrongxing/dapps/dist/modules/loading/selectors'
import { RootState } from '../../../modules/reducer'
import { buyItemRequest, BUY_ITEM_REQUEST } from '../../../modules/item/actions'
import { getLoading as getItemsLoading } from '../../../modules/item/selectors'
import {
  MapStateProps,
  MapDispatchProps,
  MapDispatch
} from './MintItemModal.types'
import MintItemModal from './MintItemModal'

const mapState = (state: RootState): MapStateProps => ({
  authorizations: getAuthorizations(state),
  isLoading:
    isLoadingType(
      getLoadingAuthorizations(state),
      FETCH_AUTHORIZATIONS_REQUEST
    ) || isLoadingType(getItemsLoading(state), BUY_ITEM_REQUEST)
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onBuyItem: item => dispatch(buyItemRequest(item))
})
export default connect(mapState, mapDispatch)(MintItemModal)
