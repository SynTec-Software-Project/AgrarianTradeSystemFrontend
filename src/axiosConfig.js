import axios from 'axios';
const axiosInstance = axios.create({
  baseURL:'https://localhost:44376/api',
});

export default axiosInstance;