import gql from 'graphql-tag'

export const MODIFY_ACCOUNT = gql`
mutation UpdateAccount($input: UpdateUserInput!) {
  updateAccount(updateUserInput: $input) {
    lastName
    firstName
    username
    email
    phone
  }
}`
