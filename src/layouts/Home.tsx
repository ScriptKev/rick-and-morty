import styled from 'styled-components'

export const HeaderStyled = {
  Container: styled.header`
    width: 100%;
    height: 45vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `,

  HeroTitle: styled.h1`
    font-size: 6rem;
    z-index: 1;
    font-weight: 900;
    color: rgb(36,40,47);

    &::selection {
      background: rgb(36, 40, 47);
      color: rgb(255, 152, 0);
    }

    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }
  `,

  HeroImg: styled.div`
    position: absolute;
    z-index: -1;
    padding-top: 30px;
  `
}

export const CharactersSection = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 4.5rem 10px;
    background-color: rgb(36, 40, 47);
    display: flex;
    align-items: center;
    justify-content: center;
  `,
}