import gql from 'graphql-tag'

export const GET_CARD = gql`
query userCard($id: Float!) {
  userCard(id: $id) {
    name
    level
    attribute
    attack
    defense
    race
    hasEffect
    description
    edition
    limitation
    backgroundPicture
    serialNumber
    archetype
    type
    comments {
      creationDate
      comment
    }
  }
}`
