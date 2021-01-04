import styled from 'styled-components'

export const NavBarStyled = {
  Container: styled.nav`
    width: 100%;
    height: 4rem;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 0 20px;
    margin-bottom: 20px;
  `,

  Item: styled.div`
    width: 1.5rem;
    height: min-content;
  `
}