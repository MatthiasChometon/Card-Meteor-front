import gql from 'graphql-tag'

export const REGISTER = gql`
mutation register($input: CreateUserInput!) {
  register(createUserInput: $input) {
    user {
      id
      username
      firstName
      lastName
      role
    }
    accessToken
    refreshToken
  }
}
`
