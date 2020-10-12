import { rem, darken } from 'polished'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }


  .link {
    padding: 0.5rem 1rem;
    font-size: ${rem(19)};
    color: #fff;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => darken(0.04, theme.colors.primary)};
    transition: background 0.2s;
    text-decoration: none;

    :hover,
    :active {
      background: ${({ theme }) => darken(0.09, theme.colors.primary)};
    }

    :focus {
      border: 1px solid #000;
      background: ${({ theme }) => darken(0.09, theme.colors.primary)};
    }
  }

`
