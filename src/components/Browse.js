import React from 'react'

import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'
import useNowPlaying from '../hooks/useNowPlaying'
import usePopular from '../hooks/usePopular'
import useTopRated from '../hooks/useTopRated'
import useUpComing from '../hooks/useUpComing'
import { useSelector } from 'react-redux'

const Browse = () => {  
  // get gptSlice data
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  useNowPlaying()
  usePopular()
  useTopRated()
  useUpComing()
  
  return (
    <div className='bg-black'>
      <div className="flex justify-center">

        {/* Overlaying Header over the image */}
        <div className="absolute w-full z-20">
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
      {
        showGptSearch ? <GptSearch />
        : <>  
            <MainContainer />
            <SecondaryContainer />
          </>
         
      }
    </div>
  )
}

export default Browse