import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { TMDB_API_OPTIONS } from '../utils/constants'
import { addTopRated } from '../utils/movieSlice'

const useTopRated = () => {
    // Job of the Hook is to fetch 'now playing' movies from TMDB APIs and store it in moviesSlice.nowPlaying
    const dispatch = useDispatch()

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3', TMDB_API_OPTIONS)
        const json = await data.json()
        dispatch(addTopRated(json.results))
    } 

    useEffect(() => {
        getTopRatedMovies()
    }, [])
}

export default useTopRated