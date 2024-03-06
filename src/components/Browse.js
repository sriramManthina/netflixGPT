import React from 'react'

import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlaying from '../hooks/useNowPlaying'
import usePopular from '../hooks/usePopular'
import useTopRated from '../hooks/useTopRated'
import useUpComing from '../hooks/useUpComing'

const Browse = () => {
  useNowPlaying()
  usePopular()
  useTopRated()
  useUpComing()
  

  return (
    <div className='bg-black'>
      <div className="flex justify-center">
        {/* Overlaying Gradient over the image */}
        <div className="absolute inset-0 aspect-video bg-gradient-to-t from-black to-black via-transparent"></div>

        {/* Overlaying Header over the image */}
        <div className="absolute inset-0 w-11/12 mx-auto flex justify-center pt-2">
          <Header/>
        </div>
        
        {/*
          MainContainer
            -> VideoBackground
            -> VideoTitle
          SecondaryContainer
            -> MovieList * n Rows
              -> MovieCards * n
         */}
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse