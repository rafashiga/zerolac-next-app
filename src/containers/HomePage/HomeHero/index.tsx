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

interface HomeHeroProps {
  data: Zerolac
}

const HomeHero: React.FC<HomeHeroProps> = ({ data }) => {
  return (
    <Container>
      <Content>
        <Information>
          <Title>Zerolac</Title>
          <Description>{data.shortDescription}</Description>
        </Information>
        <ImageContainer>
          <Image />
        </ImageContainer>
      </Content>
    </Container>
  )
}

export default HomeHero
