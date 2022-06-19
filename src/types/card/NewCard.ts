import type { Graphql } from '../graphql/Graphql'
import type { Attribute } from '~/enums/card/Attribute'
import type { Race } from '~/enums/card/Race'
import type { Type } from '~/enums/card/Type'

export interface InCreationCard extends Graphql {
  name: string
  level: number
  attribute: Attribute
  attack: string
  defense: string
  race: Race
  hasEffect: boolean
  description: string
  edition: string
  editor: string
  limitation: number
  coverPicture: string
  backgroundPicture: string
  serialNumber: number
  archetype: string
  type: Type
}
