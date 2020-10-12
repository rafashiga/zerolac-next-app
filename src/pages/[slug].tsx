import React from 'react'
import Head from 'next/head'
import HomePage from '../containers/HomePage'
import { GetStaticPaths, GetStaticProps } from 'next'
import api from '../services/api'
import { Zerolac } from '../models/zerolac'
import PostPage from '../containers/PostPage'

interface HomeProps {
  post: Zerolac
}

const removeAccents = (text: string) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const Post: React.FC<HomeProps> = ({ post }) => {
  return (
    <div>
      <Head>
        <title>{post.title}: Zerolac</title>
      </Head>

      <PostPage post={post} />
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/zerolacs')

  return {
    paths: data.map((post: Zerolac) => {
      return {
        params: {
          slug: post.name,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { data } = await api.get('zerolacs', {
    params: {
      name: ctx.params.slug,
    },
  })
  const post = data.length > 0 ? data[0] : {}

  return {
    props: { post: post },
  }
}
