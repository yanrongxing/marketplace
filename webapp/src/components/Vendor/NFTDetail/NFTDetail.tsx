import React from 'react'

import { ENSDetail } from '../../AssetPage/ENSDetail'
import { EstateDetail } from '../../AssetPage/EstateDetail'
import { ParcelDetail } from '../../AssetPage/ParcelDetail'
import { WearableDetail } from '../../AssetPage/WearableDetail'
import { EmoteDetail } from '../../AssetPage/EmoteDetail'
import { Props } from './NFTDetail.types'
import { PropsDetail } from '../../AssetPage/PropsDetail'

const NFTDetail = (props: Props) => {
  const { nft } = props
  const { parcel, estate, wearable, emote, ens } = nft.data as any
  const nftProps = nft.data.props;
  return (
    <>
      {parcel ? <ParcelDetail nft={nft} /> : null}
      {estate ? <EstateDetail nft={nft} /> : null}
      {wearable ? <WearableDetail nft={nft} /> : null}
      {emote ? <EmoteDetail nft={nft} /> : null}
      {ens ? <ENSDetail nft={nft} /> : null}
      {nftProps ? <PropsDetail nft={nft} /> : null}
      
    </>
  )
}

export default React.memo(NFTDetail)
