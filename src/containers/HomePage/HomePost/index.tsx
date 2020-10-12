import React, { useEffect } from 'react'
import Link from 'next/link'
import AOS from 'aos'
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
import ButtonLink from '../../../components/ButtonLink'

interface HomePostProps {
  post: Zerolac
  id: string
  position: string
  backgroundColor: string
}

const HomePost: React.FC<HomePostProps> = ({
  post,
  position,
  id,
  backgroundColor,
}) => {
  const firstPost = post.order === 2 ? 'first' : null
  const lastPost = post.order === 6 ? 'last' : null

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <Container
      id={id}
      className={`${backgroundColor}  ${firstPost}  ${lastPost}`}
    >
      <Content className={position}>
        <ImageContainer data-aos="fade-up">
          <Image src={post.mainImage.formats.large.url} alt={post.title} />
        </ImageContainer>
        <Information data-aos="fade-up">
          <Title>{post.title}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: post.shortDescription }}
          />
          {post.longDescription ? (
            <ButtonLink id={`btn-${id}`} href={post.name}>
              saiba mais
            </ButtonLink>
          ) : null}
        </Information>
      </Content>
    </Container>
  )
}

export default HomePost
