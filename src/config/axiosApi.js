import axios from 'axios';


export const axiosDummy = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 12000,
    headers: {
        "Content-Type": 'application/json',
    }
});