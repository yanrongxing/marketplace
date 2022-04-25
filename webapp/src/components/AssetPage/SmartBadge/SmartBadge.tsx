import React from 'react'
import { t } from '@yanrongxing/dapps/dist/modules/translation/utils'
import { SmartIcon } from '@yanrongxing/ui'
import IconBadge from '../IconBadge'
import { Props } from './SmartBadge.types'
import './SmartBadge.css'

const SmartBadge = ({ onClick }: Props) => {
  return (
    <IconBadge
      className="SmartBadge"
      text={t('wearable.smart_badge')}
      onClick={onClick}
    >
      <SmartIcon />
    </IconBadge>
  )
}

export default React.memo(SmartBadge)
