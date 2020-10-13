import { rem } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: #000;
  color: #fff;

  @media (max-width: ${props => props.theme.screen.desktop}) {
    margin-bottom: ${rem(64)};
  }
`

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: ${rem(56)};
  display: flex;
  align-items: center;

  @media (min-width: 900px) {
    width: 65%;
  }

  a {
    color: #fff;
    font-weight: 700;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`
