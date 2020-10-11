import React from 'react'

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
  title: string
  description: string
  image: string
}

const HomePost: React.FC<HomePostProps> = ({ title, description, image }) => {
  return (
    <Container>
      <Content>
        <Information>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Information>
        <ImageContainer>
          <Image src={image} alt={title} />
        </ImageContainer>
      </Content>
    </Container>
  )
}

export default HomePost
