import React from 'react'
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
import ButtonLink from '../../../components/ButtonLink'

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
          <ButtonLink id="btn-inicio" href="/#apresentacao">
            saiba mais
          </ButtonLink>
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
