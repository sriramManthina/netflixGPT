import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => { // during signUp/Login
            return action.payload 
        },
        removeUser: (state) => { // during logout
            return null
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer