import React from 'react'
import { Zerolac } from '../../models/zerolac'

import { Container, Content, Image, Title, Markdown } from './styles'

interface PostPageProps {
  post: Zerolac
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <>
      <Image backgroundImage={post.bannerImage?.formats.large.url} />
      <Container>
        <Content>
          <Title>{post.title}</Title>
          <Markdown escapeHtml={false} source={post.longDescription} />
        </Content>
      </Container>
    </>
  )
}

export default PostPage
