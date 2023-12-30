import { useEffect, useState } from 'react';
import axios from 'axios';


export const axiosInstance = axios.create({
    baseURL: '',
    timeout: 12000,
    headers: {
        "Content-Type": 'application/json',
    }
});





export const useAxios = (url, method, params) => {

    const [dataApi, setDataApi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getFetch();
    }, [url])


 

const getFetch = async() => {
    const {data} = await axiosInstance({
        url: url,
        method: method,
        params: { params }
    });

    setDataApi(data);
    setIsLoading(false);
}

  return {
    dataApi,
    isLoading
  }
}


useAxios.defaultProps = {
    params: null,
    method: 'get'
}