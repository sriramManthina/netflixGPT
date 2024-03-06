import React from 'react'
import { TMDB_IMG_URL_PREFIX } from '../utils/constants'

const MovieCard = ({ data }) => {
  return (
    <div className='w-[150px] mr-4'>
        <img className='w-full' src={TMDB_IMG_URL_PREFIX + data.poster_path} alt="movieCard" />
    </div>
  )
}

export default MovieCard