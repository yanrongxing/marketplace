import React from 'react'
import { Icon } from '@yanrongxing/ui'
import { Props } from './Expiration.types'
import { formatDistanceToNow } from '../../../lib/date'
import { t } from '@yanrongxing/dapps/dist/modules/translation/utils'
import styles from './Expiration.module.css'

const Expiration = ({ order }: Props) => {
  if (!order) {
    return null
  }

  return (
    <div className={styles.container}>
      <Icon name="clock outline" />
      {t('asset_page.expires')}{' '}
      {formatDistanceToNow(+order.expiresAt, {
        addSuffix: true
      })}
    </div>
  )
}

export default React.memo(Expiration)
