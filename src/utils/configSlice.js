import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        userPreferredLanguage: 'en'
    },
    reducers : {
        setUserPreferredLanguage : (state, action) => {
            state.userPreferredLanguage = action.payload
        }
    }
})

export default configSlice.reducer
export const { setUserPreferredLanguage } = configSlice.actions