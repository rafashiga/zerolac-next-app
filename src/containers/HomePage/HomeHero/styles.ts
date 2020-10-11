import { rem } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    min-height: 90vh;
    width: ${({ theme }) => theme.container.desktop};
  }
`

export const Information = styled.div``

export const Title = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 3.25rem;
  margin-bottom: 2rem;
`

export const Description = styled.h3`
  width: 35%;
  font-size: ${rem(24)};
  font-weight: 100;
`

export const ImageContainer = styled.div`
  max-width: ${rem(560)};
`

export const Image = styled.img``
