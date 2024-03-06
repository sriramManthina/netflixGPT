import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { TMDB_API_OPTIONS } from '../utils/constants'
import { addNowPlaying } from '../utils/movieSlice'

const useNowPlaying = () => {
    // Job of the Hook is to fetch 'now playing' movies from TMDB APIs and store it in moviesSlice.nowPlaying
    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_API_OPTIONS)
        const json = await data.json()
        // console.log(json)
        dispatch(addNowPlaying(json.results))
    } 

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useNowPlaying