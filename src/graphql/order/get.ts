import gql from 'graphql-tag'

export const GET_ORDERS = gql`
query userOrders($ordersParams: GetOrdersInput!) {
  userOrders(getOrdersInput: $ordersParams) {
    id
    totalPrice
    productsPrice
    shippingCostPrice
    deliveryDate
    trackingNumber
    creationDate
    orderProducts {
      number
      product {
        name
      }
    }
  }
}`
