import { darken, rem } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  background: #ff0f;

  &.gray {
    background: #f3f4f5;
  }

  &.white {
    background: #fff;
  }

  &.first {
    padding-top: 3rem;
  }

  &.last {
    padding-bottom: 4rem;
  }
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
  font-size: ${rem(19)};
  font-weight: 300;
  line-height: 1.75rem;
  margin-bottom: 2rem;

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
