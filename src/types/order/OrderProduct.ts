import type { Graphql } from '../graphql/Graphql'

interface Product extends Graphql {
  id: number
  name: string
}

export interface OrderProduct extends Graphql {
  id: number
  number: number
  product: Product
}
