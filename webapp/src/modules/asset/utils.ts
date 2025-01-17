import { NFT, NFTCategory, Order } from '@yanrongxing/schemas'
import { t } from '@yanrongxing/dapps/dist/modules/translation/utils'
import { Wallet } from '@yanrongxing/dapps/dist/modules/wallet/types'
import { locations } from '../routing/locations'
import { addressEquals } from '../wallet/utils'
import { Asset } from './types'

export function getAssetName(asset: Asset) {
  if (asset.name) {
    return asset.name
  }

  switch (asset.category) {
    case NFTCategory.PARCEL:
      return t('global.parcel_with_coords', (asset as NFT).data.parcel)

    case NFTCategory.ESTATE:
      return t('global.estate')

    case NFTCategory.WEARABLE:
      return t('global.wearable')

    case NFTCategory.ENS:
      return t('global.ens')
    case NFTCategory.PROPS:
      return t('global.props')
  
    case 'art':
      return t('global.art')

    default:
      return t('global.nft')
  }
}

export function getAssetImage(asset: Asset) {
  if ('image' in asset) {
    return asset.image
  }
  if ('thumbnail' in asset) {
    return asset.thumbnail
  }
  return ''
}

export function getAssetUrl(asset: Asset) {
  if ('tokenId' in asset) {
    return locations.nft(asset.contractAddress, asset.tokenId,asset.owner)
  }
  if ('itemId' in asset) {
    return locations.item(asset.contractAddress, asset.itemId)
  }
  return ''
}

export function getAssetPrice(asset: Asset, order?: Order) {
  return 'price' in asset
    ? asset.isOnSale
      ? asset.price
      : null
    : order
    ? order.price
    : null
}

export function getAssetQuantity( order?: Order) {
  return order ? order!.quantity : 0
}

export function isOwnedBy(asset: Asset, wallet: Wallet | null) {
  const assetAddress = 'owner' in asset ? asset.owner : asset.creator
  return addressEquals(wallet?.address, assetAddress)
}
