import axios from 'axios';

export const createAxiosInstance = (apiUrl) => {
  const axiosInstance = axios.create({
        baseURL: apiUrl,
    });

    axiosInstance.interceptors.request.use((config) => {
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    return axiosInstance

}
