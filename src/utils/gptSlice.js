import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMovieResults: null,
        gptMovieNames: null
    },
    reducers : {
        toggleShowGptSearch : (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovies : (state, action) => {
            const {movieNames, movieResults} = action.payload
            state.gptMovieNames = movieNames
            state.gptMovieResults = movieResults
        }
    }
})

export default gptSlice.reducer
export const { toggleShowGptSearch, addGptMovies } = gptSlice.actions