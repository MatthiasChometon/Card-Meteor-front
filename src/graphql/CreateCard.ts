import gql from 'graphql-tag'

export const CREATE_CARD = gql`
mutation createcard($input: CreateCardInput) {
  createcard(createCardInput: $input) {
    user {
      id
      name
      level
      attribute
      attack
      defense
      description
      edition
      editor
      limitation
      coverPicture
      backgroundPicture
      step
      archetype
    }
    accessToken
    refreshToken
  }
}
`
