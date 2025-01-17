import { all, takeEvery, put } from 'redux-saga/effects'
import { toastSaga as baseToastSaga } from '@yanrongxing/dapps/dist/modules/toast/sagas'
import { showToast } from '@yanrongxing/dapps/dist/modules/toast/actions'
import { getStoreUpdateSucessToast } from './toasts'
import { UPDATE_STORE_SUCCESS } from '../store/actions'

export function* toastSaga() {
  yield all([baseToastSaga(), customToastSaga()])
}

function* customToastSaga() {
  yield all([successToastSagas()])
}

function* successToastSagas() {
  yield takeEvery(UPDATE_STORE_SUCCESS, handleStoreUpdateSuccess)
}

function* handleStoreUpdateSuccess() {
  yield put(showToast(getStoreUpdateSucessToast()))
}
