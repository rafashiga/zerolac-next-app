import React from 'react'
import { Zerolac } from '../../../models/zerolac'

import {
  Container,
  Content,
  Information,
  Title,
  Description,
  ImageContainer,
  Image,
} from './styles'

interface HomePostProps {
  post: Zerolac
  id: string
  position: string
}

const HomePost: React.FC<HomePostProps> = ({ post, position, id }) => {
  return (
    <Container id={id}>
      <Content className={position}>
        <ImageContainer>
          <Image src={post.mainImage.formats.large.url} alt={post.title} />
        </ImageContainer>
        <Information>
          <Title>{post.title}</Title>
          <Description>{post.shortDescription}</Description>
        </Information>
      </Content>
    </Container>
  )
}

export default HomePost
