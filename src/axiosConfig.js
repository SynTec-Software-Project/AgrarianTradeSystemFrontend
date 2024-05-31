import axios from 'axios';

// Create an Axios instance with the base URL and headers
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
  }
});

export default axiosInstance;