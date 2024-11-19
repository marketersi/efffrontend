import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://marketsi.phpdev.co.in/',
  headers: {},
});
