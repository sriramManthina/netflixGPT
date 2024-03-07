import React from 'react'

import GptSearchBox from './GptSearchBox'
import GptMovieSuggestions from './GptMovieSuggestions'
import { LOGIN_BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className='text-red-500 relative h-screen'>
       <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${LOGIN_BG_IMG}')`,
        }}
      ></div>
      {/* Overlaying Gradient over the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black via-transparent"></div>


      <div className="absolute inset-0 flex flex-wrap items-center justify-center w-full">
        <div className='w-full z-20'>
          <GptSearchBox />
        </div>
        <div className='w-full'>
          <GptMovieSuggestions />
        </div>
      </div>

      
    </div>
  )
}

export default GptSearch