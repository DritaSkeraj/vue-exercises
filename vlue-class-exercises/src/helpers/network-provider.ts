import axios, { AxiosInstance } from 'axios';

export const local: AxiosInstance = axios.create({
    baseURL: '/',
    timeout: 10000,
});

export const netlify: AxiosInstance = axios.create({
    baseURL: '/.netlify/functions/',
    timeout: 10000,
});
