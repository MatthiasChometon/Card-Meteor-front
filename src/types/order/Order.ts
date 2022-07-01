import type { Graphql } from '../graphql/Graphql'
import type { OrderProduct } from './OrderProduct'

export interface Order extends Graphql {
  id: number
  totalPrice: number
  productsPrice: number
  shippingCostPrice: number
  deliveryDate: Date
  trackingNumber: string
  creationDate: Date
  orderProducts: OrderProduct[]
}
