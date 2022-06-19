import gql from 'graphql-tag'

export const CREATE_CARD = gql`
mutation createCard($newCard: CreateCardInput!) {
  createCard(createCardInput: $newCard) {
    name
  }
}`
