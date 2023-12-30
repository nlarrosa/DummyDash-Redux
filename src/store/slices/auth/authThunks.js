import { axiosDummy } from "../../../config/axiosApi";
import { login } from "./authSlice";




export const getLogin = (username, password) => {

    return async (dispatch, getState) => {

        
        const { data } = await axiosDummy.post('/auth/login', {
            username,
            password
        });

        dispatch( login({
            user:{
              "id": data.id,
              "username": data.username,
              "email": data.email,
              "firstName":data.firstName,
              "lastName": data.lastName,
              "gender": data.gender,
            },
            token: data.token,
        }));
    }
}