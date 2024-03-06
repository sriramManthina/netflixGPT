import React from 'react'
import { useSelector } from 'react-redux'

import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)

  return (
    <div className='-mt-[250px] relative z-10'>
      {/*

        MovieList - Popular
          MovieCards * n
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Action
      
       */}

       <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
       <MovieList title={"Top Rated"} movies={movies.topRated} />
       <MovieList title={"Up Coming"} movies={movies.upComing} />
       <MovieList title={"Popular"} movies={movies.popular} />
    </div>
  )
}

export default SecondaryContainer