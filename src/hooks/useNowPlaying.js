import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TMDB_API_OPTIONS } from '../utils/constants'
import { addNowPlaying } from '../utils/movieSlice'

const useNowPlaying = () => {
    // Job of the Hook is to fetch 'now playing' movies from TMDB APIs and store it in moviesSlice.nowPlaying
    const dispatch = useDispatch()

    const { nowPlaying } = useSelector(state => state.movies)
    // console.log(nowPlaying)

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlaying(json.results))
    } 

    useEffect(() => {
        // only make a new fetch call if nowPlaying array is empty
        if(!nowPlaying.length) getNowPlayingMovies()
    }, [])
}

export default useNowPlaying