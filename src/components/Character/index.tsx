import { Link } from 'react-router-dom'
import { CharacterProps } from 'type-models/Character'
import { CharacterStyled, StatusIcon } from './styled'

const Character = ({ name, status, species, location, image, episodes, id }: CharacterProps): JSX.Element => {

  const CharacterStatus = (status: string) => {
    if (status === 'Alive') return <StatusIcon.Alive />
    if (status === 'Dead') return <StatusIcon.Dead />
    if (status === 'unknown') return <StatusIcon.Unknown />

    return;
  }

  return (
    <CharacterStyled.Container>
      <CharacterStyled.ImgContainer>
        <CharacterStyled.Img src={image} alt={name} />
      </CharacterStyled.ImgContainer>

      <CharacterStyled.Descriptions>
        <div className='descriptions'>
          <Link to={`/character/${id}`}>
            <h2 className='Character__Name'>{name}</h2>
          </Link>
          <span className='StatusSpecies'>
            {CharacterStatus(status)}
            {status} - {species}
          </span>
        </div>

        <div className='descriptions'>
          <span className='location'>Last known location:</span>
          <a>
            <p>{location.name}</p>
          </a>
        </div>
      </CharacterStyled.Descriptions>

      <section>
        {
          episodes?.map(({ name }: any) =>
            <p key={name}>{name}</p>
          )
        }
      </section>
    </CharacterStyled.Container>
  )
}

export default Character
