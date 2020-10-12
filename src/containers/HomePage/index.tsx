import React from 'react'
import { Zerolac } from '../../models/zerolac'
import HomeHero from './HomeHero'
import HomePost from './HomePost'

interface HomeProps {
  heroData: Zerolac
  posts: Zerolac[]
}

const HomePage: React.FC<HomeProps> = ({ heroData, posts }) => {
  const removeAccents = (text: string) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  const isOdd = (order: number) => {
    const result = order % 2
    return result === 1 ? true : false
  }

  return (
    <>
      <HomeHero data={heroData} />
      {posts.map(post => (
        <HomePost
          key={post.id}
          id={removeAccents(post.name)}
          post={post}
          position={isOdd(post.order) ? 'right' : 'left'}
        />
      ))}
    </>
  )
}

export default HomePage
