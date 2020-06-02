// eslint-disable-next-line no-unused-vars
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export default (): AxiosInstance => {
  const myAxios = axios.create({
    baseURL: '/',
    withCredentials: true,
  });

  return myAxios;
};
