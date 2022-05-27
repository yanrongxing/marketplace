import { log } from '@graphprotocol/graph-ts'
import * as categories from './categories'
import * as addresses from '../../data/addresses'

export function getCategory(contractAddress: string): string {
  let category = ''

  if (contractAddress == addresses.LANDRegistry) {
    category = categories.PARCEL
  } else if (contractAddress == addresses.EstateRegistry) {
    category = categories.ESTATE
  } else if (contractAddress == addresses.DCLRegistrar) {
    category = categories.ENS
  } else if (contractAddress == addresses.ERC1155) {
    category = categories.PROPS
  }  else  {
    category = categories.WEARABLE
  }

  return category
}
