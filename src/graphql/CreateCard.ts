import gql from 'graphql-tag'

export const CREATE_CARD = gql`
mutation createCard($card: CreateCardInput!) {
  createCard(createCardInput: $card) {
   id
  }
}
`
