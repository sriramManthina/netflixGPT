import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

    console.log(title, movies)

    const scrollbarStyles = {
        WebkitOverflowScrolling: 'touch', // Optional: Enables momentum scrolling on iOS devices
        scrollbarWidth: 'thin',
        scrollbarColor: '#fff2 #000f', // Thumb Color Track Color
    };

    return (
    <div className='px-4 text-white'>
        <h1 className='text-xl py-2'>{title}</h1>    
        <div className='flex flex-wrap overflow-x-scroll' style={scrollbarStyles}>
            <div className='flex'>
                {
                    movies.map((movie) => <MovieCard key={movie.id} data={movie} />)
                }
            </div>
        </div>
    </div>
    )
}

export default MovieList