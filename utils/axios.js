import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || process.env.API_BASE_URL || 'https://devcase.isiksoftyazilim.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance; 