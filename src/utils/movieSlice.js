import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: [],
        trailerVideoKey: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload
        },
        addPopular: (state, action) => {
            state.popular = action.payload
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload
        },
        addUpComing: (state, action) => {
            state.upComing = action.payload
        },
        addTrailerVideoKey: (state, action) => {
            state.trailerVideoKey = action.payload
        }
    }
})

export default movieSlice.reducer
export const { addNowPlaying, addPopular, addTopRated, addUpComing, addTrailerVideoKey } = movieSlice.actions