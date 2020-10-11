import React from 'react'
import Head from 'next/head'
import HomePage from '../containers/HomePage'
import { GetStaticProps } from 'next'
import api from '../services/api'
import { Zerolac } from '../models/zerolac'

interface HomeProps {
  heroData: Zerolac
  posts: Zerolac[]
}

const Home: React.FC<HomeProps> = ({ heroData, posts }) => {
  return (
    <div>
      <Head>
        <title>início: Zerolac</title>
      </Head>

      <HomePage heroData={heroData} posts={posts} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/zerolacs?_sort=order:ASC')

  const [heroData] = data.filter((item: Zerolac) => item.order === 1)

  const posts = data.filter((item: Zerolac) => item.order !== 1)

  return {
    props: { posts, heroData },
  }
}

export default Home
