import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {addTrailerVideoKey} from '../utils/movieSlice'
import { TMDB_API_OPTIONS } from '../utils/constants'


const useMovieTrailer = (movieId) => {
    // receive a movieId
    // get the movieTrailerKey to load the video from YouTube and add it to Redux store
    const { trailerVideoKey } = useSelector(state => state.movies)
    // console.log(trailerVideoKey)
    const dispatch = useDispatch()

    const getTrailerKey = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, TMDB_API_OPTIONS)
        const json = await data.json()
        const videos = json.results.filter(video => video.type === 'Trailer')
        const trailer = videos.length ? videos[0] : json.results[0]
        dispatch(addTrailerVideoKey(trailer.key))    
    }

    useEffect(() => {
        // if there is no trailerVideoKey, only then fetch it.
        if (!trailerVideoKey) getTrailerKey()
    }, [])
}

export default useMovieTrailer