import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { walletReducer as wallet } from '@yanrongxing/dapps/dist/modules/wallet/reducer'
import { translationReducer as translation } from '@yanrongxing/dapps/dist/modules/translation/reducer'
import { storageReducer as storage } from '@yanrongxing/dapps/dist/modules/storage/reducer'
import { transactionReducer as transaction } from '@yanrongxing/dapps/dist/modules/transaction/reducer'
import { profileReducer as profile } from '@yanrongxing/dapps/dist/modules/profile/reducer'
import { authorizationReducer as authorization } from '@yanrongxing/dapps/dist/modules/authorization/reducer'
import { toastReducer as toast } from '@yanrongxing/dapps/dist/modules/toast/reducer'

import { accountReducer as account } from './account/reducer'
import { bidReducer as bid } from './bid/reducer'
import { itemReducer as item } from './item/reducer'
import { nftReducer as nft } from './nft/reducer'
import { orderReducer as order } from './order/reducer'
import { proximityReducer as proximity } from './proximity/reducer'
import { routingReducer as routing } from './routing/reducer'
import { tileReducer as tile } from './tile/reducer'
import { uiReducer as ui } from './ui/reducer'
import { collectionReducer as collection } from './collection/reducer'
import { storeReducer as store } from './store/reducer'
import { saleReducer as sale } from './sale/reducer'
import { identityReducer as identity } from './identity/reducer'

export const createRootReducer = (history: History) =>
  combineReducers({
    account,
    authorization,
    bid,
    item,
    nft,
    order,
    profile,
    proximity,
    routing,
    storage,
    tile,
    toast,
    transaction,
    translation,
    ui,
    wallet,
    router: connectRouter(history),
    collection,
    store,
    sale,
    identity
  })

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>
