import styled from 'styled-components'

export const Detail = {
  Container: styled.article`
    width: 100%;
    height: 100%;
    animation: fadeIn ease 500ms;
    -webkit-animation: fadeIn ease 500ms;

    @keyframes fadeIn {
      0% {
        opacity:0;
        transform: translateX(-20px);
      }
      100% {
        opacity:1;
        transform: translateX(0);
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity:0;
        transform: translateX(-20px);
      }
      100% {
        opacity:1;
        transform: translateX(0);
      }
    }
  `,

  Grid: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content 1fr;
    grid-template-areas:  'img descriptions'
                          'episodes episodes';
    justify-items: center;
    column-gap: 50px;
    row-gap: 50px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: min-content min-content 1fr;
      grid-template-areas:  'img'
                            'descriptions'
                            'episodes';
      row-gap: 30px;
    }
  `,

  ContainerImg: styled.section`
    grid-area: img;
    justify-self: flex-end;

    @media screen and (max-width: 768px) {
      justify-self: center;
    }
  `,

  Img: styled.img`
    border-radius: 5px;
    box-shadow: 1px 1px 10px #00000042;
  `,

  Descriptions: styled.section`
    grid-area: descriptions;
    justify-self: flex-start;

    & .nameId {
      font-size: 3rem;
      font-weight: 900;
    }

    & .status {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 1.1rem;
    }

    & .genderSpecies {
      font-size: 1.3rem;
    }

    & p {
      margin: 10px 0;
    }

    @media screen and (max-width: 768px) {
      justify-self: center;
    }
  `,

  Episodes: styled.section`
    grid-area: episodes;

    & h3 {
      margin-bottom: 10px;
    }
  `,

  Episode: styled.div`
    width: 100%;
    height: min-content;
    padding: 10px;
    font-size: 1.1rem;
    background-color: #eee;
    margin: 10px 0;
    border-radius: 5px;
  `
}