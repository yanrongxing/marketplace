import { BigInt , JSONValue, Value, ipfs,log} from '@graphprotocol/graph-ts'
import { Transfer } from '../entities/ERC721/ERC721'
import { NFT, Parcel, Estate, Order, ENS, Wearable , NFTJSON, NFTAttribute} from '../entities/schema'
import {
  isMint,
  getNFTId,
  getTokenURI,
  cancelActiveOrder,
  clearNFTOrderProperties,
} from '../modules/nft'
import { getCategory } from '../modules/category'
import { buildEstateFromNFT, getEstateImage } from '../modules/estate'
import { buildCountFromNFT } from '../modules/count'
import {
  buildParcelFromNFT,
  getParcelImage,
  getParcelText,
  isInBounds,
} from '../modules/parcel'
import {
  buildWearableFromNFT,
  getWearableImage,
  isWearableHead,
  isWearableAccessory,
} from '../modules/wearable'
import { buildENSFromNFT } from '../modules/ens'
import * as categories from '../modules/category/categories'
import * as addresses from '../data/addresses'
import { createOrLoadAccount } from '../modules/account'
import { toLowerCase } from '../modules/utils'

export function handleTransfer(event: Transfer): void {
  if (event.params.tokenId.toString() == '') {
    return
  }

  let contractAddress = event.address.toHexString()
  let category = getCategory(contractAddress)
  let id = getNFTId(
    category,
    event.address.toHexString(),
    event.params.tokenId.toString(),
    ''
  )

  let nft = new NFT(id)

  nft.tokenId = event.params.tokenId
  nft.owner = event.params.to.toHex()
  nft.contractAddress = event.address
  nft.category = category
  nft.updatedAt = event.block.timestamp
  nft.soldAt = null
  nft.sales = 0
  nft.volume = BigInt.fromI32(0)

  // if (contractAddress != addresses.LANDRegistry) {
  //   // The LANDRegistry contract does not have a tokenURI method
  //   nft.tokenURI = getTokenURI(event)
  // }

  if (isMint(event)) {
    nft.createdAt = event.block.timestamp

    // We're defaulting "Estate size" to one to allow the frontend to search for `searchEstateSize_gt: 0`,
    // necessary because thegraph doesn't support complex queries and we can't do `OR` operations
    nft.searchEstateSize = 1

    // We default the "in bounds" property for parcels and no-parcels alike so we can just add  `searchParcelIsInBounds: true`
    // to all queries
    nft.searchParcelIsInBounds = true

    nft.searchText = ''

    nft.searchIsLand = false

    let metric = buildCountFromNFT(nft)
    metric.save()
  } else {
    let oldNFT = NFT.load(id)
    if (oldNFT!.activeOrder && cancelActiveOrder(oldNFT!, event.block.timestamp)) {
      nft = clearNFTOrderProperties(nft)
    }
  }

  if (category == categories.PARCEL) {
    let parcel: Parcel
    if (isMint(event)) {
      parcel = buildParcelFromNFT(nft)
      nft.parcel = id
      nft.image = getParcelImage(parcel)
      nft.searchIsLand = true
      nft.searchParcelIsInBounds = isInBounds(parcel.x, parcel.y)
      nft.searchParcelX = parcel.x
      nft.searchParcelY = parcel.y
      nft.searchText = getParcelText(parcel, '')
    } else {
      parcel = new Parcel(nft.id)
      parcel.owner = nft.owner
    }
    parcel.save()
  } else if (category == categories.ESTATE) {
    let estate: Estate
    if (isMint(event)) {
      estate = buildEstateFromNFT(nft)
      nft.estate = id
      nft.image = getEstateImage(estate)
      nft.searchIsLand = true
      nft.searchEstateSize = estate.size
    } else {
      estate = new Estate(nft.id)
      estate.owner = nft.owner
    }
    estate.save()
  } else if (category == categories.WEARABLE) {
    let wearable: Wearable
    if (isMint(event)) {
      wearable = buildWearableFromNFT(nft)
      if (wearable.id != '') {
        nft.wearable = id
        nft.name = wearable.name
        nft.image = getWearableImage(wearable)
        nft.searchIsWearableHead = isWearableHead(wearable)
        nft.searchIsWearableAccessory = isWearableAccessory(wearable)
        nft.searchWearableCategory = wearable.category
        nft.searchWearableBodyShapes = wearable.bodyShapes
        nft.searchWearableRarity = wearable.rarity
        nft.searchText = toLowerCase(wearable.name)
      }
    } else {
      wearable = new Wearable(nft.id)
      wearable.owner = nft.owner
    }
    let nftJson = getNFTJSON(nft,event);

    if(nftJson){
      wearable.name = nftJson.name

      if(nftJson.description){
        wearable.description = nftJson.description!
      }
      if(nftJson.category){
        wearable.category = nftJson.category!
      }
      if(nftJson.rarity){
        wearable.rarity = nftJson.rarity!
      }
      if(nftJson.image){
        nft.image = nftJson.image.replaceAll('ipfs://','https://cloudflare-ipfs.com/ipfs/')
      }
      nft.name = nftJson.name
    }
    wearable.save()
  } else if (category == categories.ENS) {
    let ens: ENS
    if (isMint(event)) {
      ens = buildENSFromNFT(nft)
      nft.ens = ens.id
    } else {
      ens = new ENS(nft.id)
      ens.owner = nft.owner
    }
    ens.save()
  }

  createOrLoadAccount(event.params.to)

  nft.save()
}

export function getNFTJSON(nft:NFT,event:Transfer):NFTJSON | null{
  let nftJSON = NFTJSON.load(nft.id)
  if(!nftJSON){
    // getTokenURI(event);
    ipfs.mapJSON('QmZJkd9jGJFx3jvvbNoHn3VPkojzcj9UUMxa2UEVx5DGA7/'+nft.tokenId.toString()+".json", 'processItem',Value.fromString(nft.id))
    nftJSON  = NFTJSON.load(nft.id)
  }
  return nftJSON
}


export function processItem(value: JSONValue, userData: Value): void {
  let nftJSON = new NFTJSON(userData.toString())

  let obj = value.toObject()
  nftJSON.name = obj.get("name")!.toString()
  nftJSON.image = obj.get('image')!.toString()
  if(obj.get('description')){
    nftJSON.description = obj.get('description')!.toString()
  }
  if(obj.get('category')){
    nftJSON.category = obj.get('category')!.toString()
  }
  if(obj.get('rarity')){
    nftJSON.rarity = obj.get('rarity')!.toString()
  }
  nftJSON.save()

  let attributes = new Array<JSONValue>();
  if(obj.get('attributes')){
    attributes = obj.get('attributes')!.toArray()
  }

  
  for (let index = 0; index < attributes.length; index++) {
    const element = attributes[index]
    let eleObj = element.toObject()
    let arrId = userData.toString()+'-'+index.toString()
    let nftAtt = new NFTAttribute(arrId)
    let trait_type =  eleObj.get('trait_type')
    if(trait_type){
      nftAtt.trait_type = trait_type.toString()
    }
    let value =  eleObj.get('value')
    if(value){
      nftAtt.value = value.toString()
    }
    let display_type =  eleObj.get('display_type')
    if(display_type){
      nftAtt.display_type = display_type.toString()
    }
    nftAtt.nftJson = userData.toString()
    nftAtt.save()
  }
  
}