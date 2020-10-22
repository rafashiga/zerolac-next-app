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
          <a href="https://www.freepik.com/pch-vector" target="_blank">
            <Image
              src={heroImg}
              title="designed by Pch.vector - Freepik.com"
              alt="designed by Pch.vector - Freepik.com"
            />
          </a>
        </ImageContainer>
      </Content>
    </Container>
  )
}

export default HomeHero
