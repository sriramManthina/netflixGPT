import React from 'react'
import { useSelector } from 'react-redux'

import MovieCard from './MovieCard'

const GptMovieSuggestions = () => {
  const { gptMovieNames, gptMovieResults } = useSelector(state => state.gpt)
  // console.log(gptMovieNames)
  // console.log(gptMovieResults)
  if(!gptMovieResults) return  
 
  return (
    <div className='w-11/12 text-white z-40 font-bold bg-black bg-opacity-75 p-4'>
      <h1 className='text-xl p-4'>{"Showing " + gptMovieResults.length + " Results for " + gptMovieNames}</h1>    
      <div className='flex justify-center'>
        <div className='flex flex-wrap justify-center'>
          {
            gptMovieResults.map((movie) => <MovieCard key={movie.id} data={movie} />)
          }
        </div>    
      </div>
    </div>
  )
}

export default GptMovieSuggestions