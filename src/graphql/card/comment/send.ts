import gql from 'graphql-tag'

export const SEND_CARD_COMMENT = gql`
mutation createCreationComment($comment: CreateCreationCommentInput!) {
  createCreationComment(creationComment: $comment) {id}
}`
