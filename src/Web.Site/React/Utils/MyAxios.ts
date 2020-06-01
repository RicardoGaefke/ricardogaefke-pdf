// eslint-disable-next-line no-unused-vars
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import Hosts from './Hosts';

export default (host: string): AxiosInstance => {
  const myHost = new Hosts(host);

  const myAxios = axios.create({
    baseURL: myHost.Api(),
    withCredentials: true,
  });

  myAxios.interceptors.response.use((response): AxiosResponse => response,
    (error: AxiosError): void => {
      if (error.response?.status === 403) {
        window.location.href = `${myHost.Identity()}403`;
      }
    });

  return myAxios;
};
