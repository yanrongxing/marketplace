import { log, Address } from '@graphprotocol/graph-ts'
import { ERC721 } from '../entities/templates'

import { createCollectionEvent } from '../entities/ERC721CollectionFactoryV2/ERC721CollectionFactoryV2'




export function handleCreateCollectionEvent(event: createCollectionEvent): void {
  ERC721.create(event.params._addr);
}
