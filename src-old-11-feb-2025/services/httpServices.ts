import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://superadmin.marketersi.pl',
  headers: {},
});
