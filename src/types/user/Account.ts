import type { Graphql } from '../graphql/Graphql'

export interface Account extends Graphql {
  lastName: string
  firstName: string
  username: string
  email: string
  phone: string
}
