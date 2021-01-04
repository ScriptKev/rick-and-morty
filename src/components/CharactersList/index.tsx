import { useQuery, QueryResult } from '@apollo/client'
import Character from 'components/Character'
import Spinner from 'components/Spinner'
import { getCharacters } from 'services/api'
import { ICharacter } from 'type-models/Character'
import { CharactersListStyled } from './styled'

const CharacterList = () => {
  const { loading, error, data }: QueryResult = useQuery(getCharacters)
  const characters = data?.characters?.results

  if (loading) return <Spinner />
  if (error) return <p>Error...</p>

  return (
    <CharactersListStyled.Container>
      {
        characters.map(({ id, name, location, image, species, status }: ICharacter) =>
          <Character
            key={id}
            location={location}
            name={name}
            image={image}
            species={species}
            status={status}
            id={id}
          />
        )
      }
    </CharactersListStyled.Container>
  )
}

export default CharacterList
