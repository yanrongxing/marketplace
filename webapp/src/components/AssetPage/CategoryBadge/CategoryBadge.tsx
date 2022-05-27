import React from 'react'
import { t } from '@yanrongxing/dapps/dist/modules/translation/utils'
import IconBadge from '../IconBadge'
import { Props } from './CategoryBadge.types'

const CategoryBadge = ({ wearable ,props, onClick }: Props) => {
  return (
    <IconBadge
      icon={wearable?wearable.category:props?.category}
      text={t(`${wearable?'wearable.category.'+wearable.category:'props.category.'+props?.category}`)}
      onClick={onClick}
    />
  )
}

export default React.memo(CategoryBadge)
