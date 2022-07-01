import gql from 'graphql-tag'

export const CREATE_ORDER = gql`
mutation createOrder($input: CreateOrderInput!) {
  createOrder(createOrderInput: $input) {
    trackingNumber
    deliveryDate
  }
}`
