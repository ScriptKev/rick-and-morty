import { gql } from '@apollo/client'

export const getCharacters = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        species
        status
        image
        location {
          name
        }
      }
    }
  }
`

export const getCharacter = (characterId: string) => {
  return gql`
    query getCharacter{
      character(id: ${characterId}) {
        id
        name
        species
        gender
        status
        location {
          name
        }
        image
        episode {
          name
        }
      }
    }
  `
}