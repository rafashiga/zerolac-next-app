import React from 'react'
import Button from '../../../components/Button'
import { Zerolac } from '../../../models/zerolac'
import heroImg from '../../../assets/hero.png'

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
    <Container id="inicio">
      <Content>
        <Information>
          <Title>Zerolac</Title>
          <Description>{data.shortDescription}</Description>
          <Button id="btn-inicio" type="button">
            saiba mais
          </Button>
        </Information>
        <ImageContainer>
          <Image
            src={heroImg}
            title="Alimento vetor criado por pch.vector - br.freepik.com"
            alt="Alimento vetor criado por pch.vector - br.freepik.com"
          />
        </ImageContainer>
      </Content>
    </Container>
  )
}

export default HomeHero
