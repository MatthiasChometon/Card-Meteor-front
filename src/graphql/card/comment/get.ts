import gql from 'graphql-tag'

export const GET_CARD_FOR_COMMENT = gql`
query card($id: Float!) {
  card(id: $id) {
    coverPicture
    comments {
      creationDate
      comment
    }
  }
}`
