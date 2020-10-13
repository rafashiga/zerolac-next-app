import { rem } from 'polished'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

type ImageDiv = {
  backgroundImage: string
}

export const Image = styled.div<ImageDiv>`
  width: 100%;
  height: ${rem(160)};
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    height: ${rem(300)};
  }
`

export const Container = styled.div`
  padding: ${rem(64)} 0;

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    padding: ${rem(120)} 0;
  }
`

export const Content = styled.div`
  width: ${({ theme }) => theme.container.mobile};
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    width: ${({ theme }) => theme.container.desktop};
  }
`

export const Title = styled.h1`
  margin-bottom: 3rem;
`

export const Markdown = styled(ReactMarkdown)`
  line-height: 1.75rem;

  img {
    max-width: 90%;
    display: block;
    margin: 2rem auto;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
      max-width: ${rem(400)};
    }
  }
`
