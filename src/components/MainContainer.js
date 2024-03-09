import React from 'react'
import { useSelector } from 'react-redux'

import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies.nowPlaying)
    if (!movies || !movies.length) return // movies haven't been fetched yet from TMDB

    const mainMovie = movies[3]

    const {original_title, overview, id} = mainMovie

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer