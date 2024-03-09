import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TMDB_API_OPTIONS } from '../utils/constants'
import { addUpComing } from '../utils/movieSlice'

const useUpComing = () => {
    // Job of the Hook is to fetch 'now playing' movies from TMDB APIs and store it in moviesSlice.nowPlaying
    const dispatch = useDispatch()

    const { upComing } = useSelector(state => state.movies)
    // console.log(upComing)

    const getUpComingMovies = async () => {
        // console.log('fetching....')
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=4', TMDB_API_OPTIONS)
        const json = await data.json()
        dispatch(addUpComing(json.results))
    } 

    useEffect(() => {
        // only make a new fetch call if upComing array is empty
        if(!upComing.length) getUpComingMovies()
    }, [])
}

export default useUpComing