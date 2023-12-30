import { createSlice } from "@reduxjs/toolkit";



const initialValueAuth = {
    token: null,
    isLogged: false,
    user: {
        username: null,
        email: null
    }
}


export const authSlice = createSlice({
    name: 'auth',
    initialState: initialValueAuth,
    reducers: {

        login: (state, action) => {
            state.token = action.payload.token,
            state.isLogged = true,
            state.user = action.payload.user
        },

        logout: (state) => {
            state.token = null,
            state.isLogged = false,
            state.user = {
                username: null,
                email: null,
                age: null
            }
        },
    }
});

export const { login, logout } = authSlice.actions;