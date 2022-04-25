import { Dispatch } from 'redux'
import { Transaction } from '@yanrongxing/dapps/dist/modules/transaction/types'
import {
  clearTransactions,
  ClearTransactionsAction
} from '@yanrongxing/dapps/dist/modules/transaction/actions'

export type Props = {
  address?: string
  transactions: Transaction[]
  onClearHistory: typeof clearTransactions
}

export type MapStateProps = Pick<Props, 'address' | 'transactions'>
export type MapDispatchProps = Pick<Props, 'onClearHistory'>
export type MapDispatch = Dispatch<ClearTransactionsAction>
