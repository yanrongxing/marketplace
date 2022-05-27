import React, { useEffect } from 'react'
import { AssetType } from '../../modules/asset/types'
import { Props } from './AssetProvider.types'

const AssetProvider = (props: Props) => {
  const {
    type,
    asset,
    order,
    isLoading,
    children,
    onFetchNFT,
    onFetchItem,
    contractAddress,
    tokenId,
    owner
  } = props

  useEffect(() => {
    if (contractAddress && tokenId) {
      switch (type) {
        case AssetType.NFT:
          console.log("owner：",owner)
          onFetchNFT(contractAddress, tokenId,owner!)
          break
        case AssetType.ITEM:
          onFetchItem(contractAddress, tokenId)
          break
        default:
          throw new Error(`Invalid Asset type ${type}`)
      }
    }
  }, [contractAddress, tokenId, type,owner, onFetchNFT, onFetchItem])

  return <>{children(asset, order, isLoading)}</>
}

export default React.memo(AssetProvider)
