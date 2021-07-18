import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BACKEND_URL
});

api.interceptors.request.use(async config => {
    const token = getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
});

const sucesso = res => res;
const error = err => {
    if (401 === err.response.status) {
        window.location = '/signin';
    } else {
        Promise.reject(err);
    }
}

api.interceptors.response.use(sucesso, error);

export default api;