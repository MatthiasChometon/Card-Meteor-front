import gql from 'graphql-tag'

export const CARDS_LIST_QUERY = gql`
  query getCardsWithSearch($getCardInput: GetCardInput!) {
    cards(getCardInput: $getCardInput) {
      id
      name
      archetype
      coverPicture
      price
      step
    }
  }
`
