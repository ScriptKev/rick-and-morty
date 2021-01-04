import styled from 'styled-components'

export const CharacterStyled = {
  Container: styled.article`
    width: 600px;
    height: 220px;
    display: flex;
    overflow: hidden;
    background: rgb(60, 62, 68);
    border-radius: 0.5rem;
    margin: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
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

    @media screen and (max-width: 425px) {
      flex-direction: column;
      height: min-content;
    }
  `,

  ImgContainer: styled.section`

  `,

  Img: styled.img`
    width: 100%;
    height: 100%;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
  `,

  Descriptions: styled.section`
    width: 100%;
    height: 100%;
    padding: 10px 20px;

    & .descriptions {
      margin: 10px 0;

      & span.location {
        color: rgb(158, 158, 158);
        font-weight: 600;
        margin-bottom: 3px;
      }

      & .StatusSpecies {
        color: rgb(245, 245, 245);
        font-weight: 600;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 5px 0;
      }

      & a, p {
        color: rgb(245, 245, 245);

        &:hover {
          color: rgb(255, 152, 0);
        }
      }
    }
  `
}

export const StatusIcon = {
  Default: styled.div`
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: rgb(158, 158, 158);
    border-radius: 50%;
  `,

  Unknown: styled.div`
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: rgb(158, 158, 158);
    border-radius: 50%;
  `,

  Alive: styled.div`
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: rgb(85, 204, 68);
    border-radius: 50%;
  `,

  Dead: styled.div`
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: #ff2b2b;
    border-radius: 50%;
  `
}