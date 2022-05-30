import { BodyShape } from '@yanrongxing/schemas'
import { getContract } from '../contract/utils'
import { NFT } from './types'

export function getNFTId(contractAddress: string, tokenId: string, owner?: string) {
  const contract = getContract({ address:  contractAddress})
  if(contract.category === 'props'){
    return contractAddress + '-' + tokenId + '-' + owner
  }else{
    return contractAddress + '-' + tokenId
  }
}

// TODO: These methods are repeated on item/utils and can be moved to asset/utils:
//   - getNFT
//   - getNFTId
export function getNFT(
  contractAddress: string | null,
  tokenId: string | null,
  nfts: Record<string, NFT>,
  owner?: string | null,
): NFT | null {
  if (!contractAddress || !tokenId) {
    return null
  }
  
  const nftId = getNFTId(contractAddress, tokenId,owner!)
  return nftId in nfts ? nfts[nftId] : null
}

export function isGender(bodyShapes: BodyShape[], gender: BodyShape) {
  if (bodyShapes.length !== 1) {
    return false
  }
  return bodyShapes[0] === gender
}

export function isUnisex(bodyShapes: BodyShape[]) {
  return bodyShapes.length === 2
}
