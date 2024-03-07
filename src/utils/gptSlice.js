import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false
    },
    reducers : {
        toggleShowGptSearch : (state) => {
            state.showGptSearch = !state.showGptSearch
        }
    }
})

export default gptSlice.reducer
export const { toggleShowGptSearch } = gptSlice.actions