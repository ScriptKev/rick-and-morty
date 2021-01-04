import styled from 'styled-components'

export const NotFoundStyled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,

  Message: styled.div`
    font-size: 2.5rem;
    color: rgb(36,40,47);
    font-weight: bold;

    & a {
      color: rgb(255, 152, 0);
    }
  `
}