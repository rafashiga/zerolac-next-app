import React from 'react'
import { Zerolac } from '../../models/zerolac'
import HomeHero from './HomeHero'
import HomePost from './HomePost'

import { WaveTop, WaveBottom } from './styles'

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

  const checkIsLastItem = (id: number) => {
    return posts.length + 1 !== id
  }

  return (
    <>
      <HomeHero data={heroData} />
      {posts.map(post => (
        <div key={post.id}>
          {isOdd(post.order) && (
            <WaveTop
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#f3f4f5"
                fillOpacity="1"
                d="M0,192L80,170.7C160,149,320,107,480,112C640,117,800,171,960,186.7C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              ></path>
            </WaveTop>
          )}

          <HomePost
            id={removeAccents(post.name)}
            post={post}
            backgroundColor={!isOdd(post.order) ? 'gray' : 'white'}
            position={isOdd(post.order) ? 'right' : 'left'}
          />

          {checkIsLastItem(post.id)
            ? isOdd(post.order) && (
                <WaveBottom
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#f3f4f5"
                    fillOpacity="1"
                    d="M0,224L80,224C160,224,320,224,480,197.3C640,171,800,117,960,117.3C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                  ></path>
                </WaveBottom>
              )
            : null}
        </div>
      ))}
    </>
  )
}

export default HomePage
