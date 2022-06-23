import gql from 'graphql-tag'

export const UPDATE_CARD = gql`
mutation updateCard(
    $cardToUpdate: UpdateCardInput!
    $backgroundPicture: Upload
    $coverPicture: Upload!) {
  updateUserCard(
    updateCardInput: $cardToUpdate
    backgroundPicture: $backgroundPicture
    coverPicture: $coverPicture) {
      id
    }
}`
