import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Inter', Helvetica, Arial, sans-serif;
    text-rendering: optimizelegibility;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
      font-size: 16px;

      @media (max-width: 768px) {
        font-size: 15px;
      }
    }

  button {
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }
`

export default GlobalStyled