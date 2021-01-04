export type CharacterType = {
  episode: [{}]
  id: string
  location: Location
  image: string
  name: string
  species: string
  status: string
  gender?: string
  __typename?: string
}

type Location = {
  name: string
  type?: string
  dimension?: string
  created?: string
}

export interface ICharacter {
  episode: [{}]
  id: string
  location: Location
  image: string
  name: string
  species: string
  status: string
  gender?: string
  __typename?: string
}


export type CharacterProps = {
  gender?: string
  image: string
  name: string
  species: string
  location: Location
  status: string
  episodes?: [{}]
  id: string
}
