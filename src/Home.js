import React from 'react'
import Feed from './Feed'

const Home = ({posts ,setPosts}) => {
  return (
    <div className='home'>
      {
        posts.length>0 ?<Feed posts={posts}/> : <h1>EMPTY LIST</h1>
      }
    </div>
  )
}

export default Home