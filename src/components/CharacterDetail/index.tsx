import { Detail } from './styled'
import { CharacterProps } from 'type-models/Character'
import { StatusIcon } from 'components/Character/styled'

const CharacterDetail = ({ name, status, gender, species, location, image, episodes, id }: CharacterProps) => {

  const CharacterStatus = (status: string) => {
    if (status === 'Alive') return <StatusIcon.Alive />
    if (status === 'Dead') return <StatusIcon.Dead />
    if (status === 'unknown') return <StatusIcon.Unknown />

    return;
  }

  return (
    <Detail.Container>
      <Detail.Grid>
        <Detail.ContainerImg>
          <Detail.Img src={image} alt={name} />
        </Detail.ContainerImg>

        <Detail.Descriptions>
          <h1 className='nameId'>{id} {name}</h1>
          <div className='status'>{CharacterStatus(status)} {status}</div>
          <p className='genderSpecies'>{species} - {gender}</p>
          <p>
            Location: {location.name}
          </p>
        </Detail.Descriptions>

        <Detail.Episodes>
          <h3>Episodes</h3>
          {
            episodes?.map(({ name }: any) =>
              <Detail.Episode key={name}>{name}</Detail.Episode>
            )
          }
        </Detail.Episodes>
      </Detail.Grid>
    </Detail.Container>
  )
}

export default CharacterDetail
