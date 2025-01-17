import React from 'react'
import { t } from '@yanrongxing/dapps/dist/modules/translation/utils'
import { Mana, Stats } from '@yanrongxing/ui'
import { formatMANA } from '../../../lib/mana'
import { Props } from './Price.types'

const Price = ({ asset, price,quantity }: Props) => {
  

  return (
    <>
    {
      price && 
      <Stats title={t('asset_page.price')}>
        <Mana network={asset.network} withTooltip>
          {formatMANA(price)}
        </Mana>
      </Stats>
    }
    {
      quantity!>0 && 
      <Stats title={t('asset_page.quantity')}>
        <Mana network={asset.network} withTooltip>
          {quantity}
        </Mana>
      </Stats>
    }
    
    </>
    
    
  )
}

export default React.memo(Price)
