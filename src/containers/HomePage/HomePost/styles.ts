import { rem } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  background: #ff0f;
`

export const Content = styled.div`
  width: ${({ theme }) => theme.container.mobile};
  margin: 0 auto;

  padding: 3rem 0;

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${({ theme }) => theme.container.desktop};

    &.right {
      flex-direction: row-reverse;
    }

    &.left {
      flex-direction: row;
    }
  }
`

export const Information = styled.div`
  margin-top: 2rem;
  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    margin-top: 0;
    width: 45%;
  }
`

export const Title = styled.h2`
  font-size: ${rem(32)};
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    font-size: ${rem(36)};
  }
`

export const Description = styled.p`
  font-size: ${rem(18)};
  line-height: 1.75rem;

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    line-height: 1.75rem;
  }
`

export const ImageContainer = styled.div`
  width: 50%;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    margin: 0;
    width: 28%;
  }
`

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`
