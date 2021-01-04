import BgHeader from 'components/BgHeader'
import CharacterList from 'components/CharactersList'
import { CharactersSection, HeaderStyled } from 'layouts/Home'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <main>
        <HeaderStyled.Container>
          <HeaderStyled.HeroTitle>Rick And Morty</HeaderStyled.HeroTitle>
          <HeaderStyled.HeroImg>
            <BgHeader />
          </HeaderStyled.HeroImg>
        </HeaderStyled.Container>

        <CharactersSection.Container>
          <CharacterList />
        </CharactersSection.Container>
      </main>
    </div>
  )
}
