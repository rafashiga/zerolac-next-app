import React from 'react'
import { Zerolac } from '../../models/zerolac'
import HomeHero from './HomeHero'
import HomePost from './HomePost'

interface HomeProps {
  heroData: Zerolac
  posts: Zerolac[]
}

const HomePage: React.FC<HomeProps> = ({ heroData, posts }) => {
  return (
    <>
      <HomeHero data={heroData} />
      {posts.map(post => (
        <HomePost
          key={post.id}
          title={post.title}
          description={post.shortDescription}
          image={post.mainImage?.formats.large.url}
        />
      ))}
    </>
  )
}

export default HomePage
