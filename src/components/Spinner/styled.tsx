import styled from 'styled-components'

export const SpinnerStyled = {
  Core: styled.div`
    border: 6px solid rgb(255, 152, 0);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border-left-color: transparent;
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% {
        transfrom: rotate(0deg)
      }

      100% {
        transform: rotate(360deg)
      }
    }
  `
}