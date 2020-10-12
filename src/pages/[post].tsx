import React from 'react'
import Head from 'next/head'
import HomePage from '../containers/HomePage'
import { GetStaticProps } from 'next'
import api from '../services/api'
import { Zerolac } from '../models/zerolac'

interface HomeProps {
  post: Zerolac
}

const Post: React.FC<HomeProps> = ({ post }) => {
  return (
    <div>
      <Head>
        <title>início: Zerolac</title>
      </Head>

      <h1>sjdspadjp</h1>
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async () => {}

export default Post
