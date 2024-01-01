import { axiosDummy } from "../../../config/axiosApi";
import { login, logout } from "./authSlice";




export const getLogin = (username, password) => {

    return async (dispatch, getState) => {

        const { data } = await axiosDummy.post('/auth/login', {
            username,
            password
        });

        const newUser = {
            user:{
                id: data.id,
                username: data.username,
                email: data.email,
                firstName:data.firstName,
                lastName: data.lastName,
                gender: data.gender,
              },
              token: data.token,
        }

        localStorage.setItem('token', JSON.stringify(newUser));

        dispatch( login({
            user:{
              id: data.id,
              username: data.username,
              email: data.email,
              firstName:data.firstName,
              lastName: data.lastName,
              gender: data.gender,
            },
            token: data.token,
        }));
    }
}



export const checkToken = () => {

    return (dispatch) => {

        const token = localStorage.getItem('token');
        const dataToken = JSON.parse(token);

        if(!token){
            dispatch( logout() );
        }

        dispatch( login({
            user:{
              id: dataToken.user.id,
              username: dataToken.user.username,
              email: dataToken.user.email,
              firstName:dataToken.user.firstName,
              lastName: dataToken.user.lastName,
              gender: dataToken.user.gender,
            },
            token: dataToken.token,
        }));
    }
    
}