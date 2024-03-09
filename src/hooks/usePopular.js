import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TMDB_API_OPTIONS } from '../utils/constants'
import { addPopular } from '../utils/movieSlice'

const usePopular = () => {
    // Job of the Hook is to fetch 'now playing' movies from TMDB APIs and store it in moviesSlice.nowPlaying
    const dispatch = useDispatch()

    const { popular } = useSelector(state => state.movies)
    // console.log(popular)

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', TMDB_API_OPTIONS)
        const json = await data.json()

        dispatch(addPopular(json.results))
    } 

    useEffect(() => {
        // only make a new fetch call if popular array is empty
        if(!popular.length) getPopularMovies()
    }, [])
}

export default usePopular