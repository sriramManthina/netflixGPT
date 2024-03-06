import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: [],
        trailerVideoKey: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload
        },

        addTrailerVideoKey: (state, action) => {
            state.trailerVideoKey = action.payload
        }
    }
})

export default movieSlice.reducer
export const { addNowPlaying, addTrailerVideoKey } = movieSlice.actions