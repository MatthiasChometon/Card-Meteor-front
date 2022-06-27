import { createGlobalState, useStorage } from '@vueuse/core'
import type { NewCard } from '../../types/card/NewCard'
import { Attribute } from '~/enums/card/Attribute'
import { Race } from '~/enums/card/Race'
import { Type } from '~/enums/card/Type'

const newCard: NewCard = {
  name: 'Fluffal Cat',
  level: 12,
  attribute: Attribute.earth,
  attack: '700',
  defense: '300',
  race: Race.fairy,
  hasEffect: true,
  description: 'If this card is sent to Graveyard as a Fusion Material for a Fusion Summon: You can target 1 "Polymerization" in your Graveyard; add it to your hand? You can only use this effect of "Fluffal Car" once per turn.',
  edition: 'NECH-EN019',
  limitation: 3,
  coverPicture: null,
  backgroundPicture: null,
  serialNumber: 451543,
  archetype: 'Fluffal',
  type: Type.empty,
  comments: [],
  __typename: 'Card',
}

export const useInCreationCard = createGlobalState(
  () => useStorage('newCard', newCard),
)
