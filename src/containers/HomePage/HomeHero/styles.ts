import { rem } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.div`
  width: ${({ theme }) => theme.container.mobile};
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: ${rem(120)} 0;

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
  font-size: ${rem(24)};
  font-weight: 300;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.secondary};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    width: 35%;
  }
`

export const ImageContainer = styled.div`
  max-width: ${rem(560)};
`

export const Image = styled.img``
