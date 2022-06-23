import type { Graphql } from '../graphql/Graphql'
import type { FileInput } from '../FileInput'
import type { Attribute } from '~/enums/card/Attribute'
import type { Race } from '~/enums/card/Race'
import type { Type } from '~/enums/card/Type'

export interface NewCard extends Graphql {
  name: string
  level: number
  attribute: Attribute
  attack: string
  defense: string
  race: Race
  hasEffect: boolean
  description: string
  edition: string
  limitation: number
  coverPicture: FileInput
  backgroundPicture: FileInput
  serialNumber: number
  archetype: string
  type: Type
}
