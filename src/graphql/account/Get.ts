import gql from 'graphql-tag'

export const GET_ACCOUNT = gql`
query getAccount {
  account {
    lastName
    firstName
    username
    email
    phone  
  }
}`
