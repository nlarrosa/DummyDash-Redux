import { createSlice } from "@reduxjs/toolkit";



const initialValueAuth = {
    token: null,
    isLoading: true,
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
            state.user = action.payload.user,
            state.isLoading = false
        },

        logout: (state) => {
            state.token = null,
            state.isLogged = false,
            state.isLoading = false,
            state.user = {
                username: null,
                email: null,
                age: null
            }
        },
    }
});

export const { login, logout } = authSlice.actions;