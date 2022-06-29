import gql from 'graphql-tag'

export const VALIDATE_CARD = gql`
mutation validateCard($id: Float!) {
  validateCard(id: $id) {id}
}`
