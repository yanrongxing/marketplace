import { Item } from '@yanrongxing/schemas'

export function getItem(
  contractAddress: string | null,
  tokenId: string | null,
  items: Record<string, Item>
): Item | null {
  if (!contractAddress || !tokenId) {
    return null
  }

  const itemId = getItemId(contractAddress, tokenId)
  return itemId in items ? items[itemId] : null
}

export function getItemId(contractAddress: string, tokenId: string) {
  return contractAddress + '-' + tokenId
}
