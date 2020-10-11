import { rem } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  background: #ff0f;
`

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    width: ${({ theme }) => theme.container.desktop};
  }
`

export const Information = styled.div`
  width: 45%;
`

export const Title = styled.h2`
  font-size: ${rem(36)};
  margin-bottom: 2rem;
`

export const Description = styled.p`
  font-size: ${rem(19)};
  line-height: 1.75rem;
`

export const ImageContainer = styled.div`
  width: 28%;
`

export const Image = styled.img`
  width: 100%;
`
