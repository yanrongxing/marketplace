import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import {
  getData as getAuthorizations,
  getLoading,
  getError
} from '@yanrongxing/dapps/dist/modules/authorization/selectors'
import { FETCH_AUTHORIZATIONS_REQUEST } from '@yanrongxing/dapps/dist/modules/authorization/actions'

import { RootState } from '../../modules/reducer'
import {
  isUserCanceled,
  isUserDeniedSignatureError,
  isContractAccountError
} from '../../modules/transaction/utils'
import { isLoadingType } from '@yanrongxing/dapps/dist/modules/loading/selectors'
import { getWallet, isConnecting } from '../../modules/wallet/selectors'
import {
  MapStateProps,
  MapDispatch,
  MapDispatchProps
} from './SettingsPage.types'
import SettingsPage from './SettingsPage'

const mapState = (state: RootState): MapStateProps => {
  const wallet = getWallet(state)

  const error = getError(state)

  // TODO: Change this to use ErrorCodes. Needs an overhaul on @yanrongxing/dapps
  const hasError =
    !!error &&
    !isUserCanceled(error) &&
    !isUserDeniedSignatureError(error) &&
    !isContractAccountError(error)

  return {
    wallet,
    authorizations: getAuthorizations(state),
    isLoadingAuthorization: isLoadingType(
      getLoading(state),
      FETCH_AUTHORIZATIONS_REQUEST
    ),
    isConnecting: isConnecting(state),
    hasError
  }
}

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onNavigate: path => dispatch(push(path))
})

export default connect(mapState, mapDispatch)(SettingsPage)
