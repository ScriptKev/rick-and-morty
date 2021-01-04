import { useParams } from 'react-router-dom'
import { QueryResult, useQuery } from '@apollo/client'
import { getCharacter } from 'services/api'
import CharacterDetail from 'components/CharacterDetail'
import { useEffect } from 'react'
import Spinner from 'components/Spinner'

interface ParamsTypes {
  id: string
}

export default function Detail() {
  const { id } = useParams<ParamsTypes>()
  const { loading, error, data }: QueryResult = useQuery(getCharacter(id))
  const { character } = !!data && data

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}><Spinner /></div>
  if (error) return <p>Error...</p>

  return (
    <div style={{ padding: '0 10px' }}>
      <CharacterDetail
        location={character.location}
        gender={character.gender}
        image={character.image}
        species={character.species}
        name={character.name}
        status={character.status}
        episodes={character.episode}
        id={character.data}
      />
    </div>
  )
}
