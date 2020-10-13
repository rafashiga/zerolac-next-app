import { rem } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.div`
  width: ${({ theme }) => theme.container.mobile};
  margin: 0 auto;

  padding: ${rem(120)} 0;

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    min-height: 90vh;
    display: flex;
    align-items: center;
    width: ${({ theme }) => theme.container.desktop};
  }
`

export const Information = styled.div`
  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    width: 35%;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary_dark};
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
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  margin-top: 4.5rem;
  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    margin: 0;
    width: 65%;
  }
`

export const Image = styled.img`
  width: 100%;
`
