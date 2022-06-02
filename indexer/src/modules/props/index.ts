import { NFT, Props, } from '../../entities/schema'
import {
  Address,
  BigInt,
  log
} from "@graphprotocol/graph-ts";
export function buildPropsFromNFT(nft: NFT): Props {
  let props = new Props(nft.id)
  props.owner = nft.owner
  props.name = getPropsName(nft.tokenId)
  props.description = getPropsDesc(nft.tokenId)
  props.category = getPropsCategory(nft.tokenId)

  return props
}

export function getPropsImage(nft:NFT): string {
  let tokenURI = 'https://yrxtest.y3api.cn/metadata/builder-server/erc1155/'+nft.contractAddress.toHexString()+"/"+nft.tokenId.toString()+'.png';
  return tokenURI;
}
export function getPropsCategory(tokenId:BigInt): string {
  
  switch(tokenId.toI32()){
    case 1:
      return 'fragments';
    case 2:
      return 'box';
    case 3:
      return 'vibranium';
    case 4:
      return 'diamond';
    case 5:
      return 'diamond';
    default:
      return '';
  }

}
export function getPropsName(tokenId:BigInt): string {
  
  switch(tokenId.toI32()){
    case 1:
      return 'Fragments';
    case 2:
      return 'Box';
    case 3:
      return 'Vibranium';
    case 4:
      return 'YellowDiamond';
    case 5:
      return 'PurpleDiamond';
    default:
      return '';
  }
}

export function getPropsDesc(tokenId:BigInt): string {
  
  switch(tokenId.toI32()){
    case 1:
      return 'Fragments';
    case 2:
      return 'Box';
    case 3:
      return 'Vibranium';
    case 4:
      return 'YellowDiamond';
    case 5:
      return 'PurpleDiamond';
    default:
      return '';
  }
}