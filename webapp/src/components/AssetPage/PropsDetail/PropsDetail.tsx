import React from 'react'
import { Header, Stats } from '@yanrongxing/ui'
import { t } from '@yanrongxing/dapps/dist/modules/translation/utils'

import { Network } from '../Network'
import { Description } from '../Description'
import { Props } from './PropsDetail.types'
import { AssetType } from '../../../modules/asset/types'

import CategoryBadge from '../CategoryBadge'
import { Owner } from '../Owner'
import Price from '../Price'
import Expiration from '../Expiration'
import { Actions } from '../Actions'
import { BidList } from '../BidList'
import { TransactionHistory } from '../TransactionHistory'
import BaseDetail from '../BaseDetail'
import { AssetImage } from '../../AssetImage'
import styles from './PropsDetail.module.css'

const PropsDetail = ({ nft }: Props) => {
  const nftProps = nft.data.props!
  return (
    <BaseDetail
      asset={nft}
      assetImage={<AssetImage asset={nft} isDraggable />}
      isOnSale={!!nft.activeOrderId}
      badges={
        <>
          {/* <RarityBadge
            rarity={wearable.rarity}
            assetType={AssetType.NFT}
            category={NFTCategory.WEARABLE}
          /> */}
          <CategoryBadge wearable={undefined} props={nftProps} assetType={AssetType.NFT} />
          {/* <GenderBadge
            bodyShapes={wearable.bodyShapes}
            assetType={AssetType.NFT}
            section={Section.WEARABLES}
          />
          {wearable.isSmart ? <SmartBadge assetType={AssetType.NFT} /> : null} */}
        </>
      }
      left={
        <>
          <Description text={nftProps.description} />
          <div className="Description">
            <Header sub>{t('asset_page.balance')}</Header>
            <div className="description-text">{nft.balance}</div>
          </div>
          <div className="BaseDetail row">
            <Owner asset={nft} />
            {/* <Collection asset={nft} /> */}
          </div>
        </>
      }
      box={
        <>
          <div className="BaseDetail row">
            <Price asset={nft}/>
          </div>
          
          <div className="BaseDetail row">
            {nft.issuedId ? (
              <Stats title={t('global.issue_number')}>
                <Header>
                  {Number(nft.issuedId).toLocaleString()}
                  <span className={styles.issued}>
                  </span>
                </Header>
              </Stats>
            ) : null}
            <Network asset={nft} />
          </div>
          <Actions nft={nft} />
          <Expiration />
        </>
      }
      below={
        <>
          <BidList nft={nft} />
          <TransactionHistory asset={nft} />
        </>
      }
    />
  )
}

export default React.memo(PropsDetail)
