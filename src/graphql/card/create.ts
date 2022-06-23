import gql from 'graphql-tag'

export const CREATE_CARD = gql`
mutation createCard(
    $newCard: CreateCardInput!
    $backgroundPicture: Upload!
    $coverPicture: Upload!) {
  createCard(
    createCardInput: $newCard
    backgroundPicture: $backgroundPicture
    coverPicture: $coverPicture) {
      id
  }
}
`
