import { log, Address, Bytes } from '@graphprotocol/graph-ts'
import { ERC721 } from '../entities/templates'
import { ERC1155 } from '../entities/templates'
import { FundChannelUpgrades } from '../entities/FundChannelUpgrades/FundChannelUpgrades'

import { AssertTypeAdded,AssertTypeUpdated } from '../entities/FundChannelUpgrades/FundChannelUpgrades'




export function handleAssertTypeAdded(event: AssertTypeAdded): void {
  const fundChannelUpgrades  = FundChannelUpgrades.bind(event.address);
  const result = fundChannelUpgrades.asserts(event.params.id);
  const assertType = result.getAssertType();
  if(assertType == 'ERC721'){
    ERC721.create(event.params.contractAddress);
  }else if(assertType == 'ERC1155'){
    ERC1155.create(event.params.contractAddress);
  }
  
}

export function handleAssertTypeUpdated(event: AssertTypeUpdated): void {
  const fundChannelUpgrades  = FundChannelUpgrades.bind(event.address);
  const result = fundChannelUpgrades.asserts(event.params.id);
  const assertType = result.getAssertType();
  if(assertType == 'ERC721'){
    ERC721.create(event.params.contractAddress);
  }else if(assertType == 'ERC1155'){
    ERC1155.create(event.params.contractAddress);
  }
}