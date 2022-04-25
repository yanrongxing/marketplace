import React from 'react'
import { Network } from '@yanrongxing/schemas'

export type Props = {
  open: boolean
  headerTitle?: string
  content?: React.ReactNode | string
  loading?: boolean
  network: Network
  disabled?: boolean
  valueToConfirm: string
  onCancel: () => void
  onConfirm: () => void
}
