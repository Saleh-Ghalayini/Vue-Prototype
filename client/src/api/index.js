import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      
      if (window.$pinia) {
        const authStore = window.$pinia.state.value.auth;
        if (authStore) {

          authStore.isAuthenticated = false;
          authStore.user = null;
          authStore.token = null;
        }
      }

      window.location.href = '/';
    }

    if (error.response) {
      const status = error.response.status;
      
      if (status >= 500) {
        console.error('Server error occurred:', error.response.data);
      } else if (status === 403) {
        console.warn('Forbidden access attempt:', error.config.url);
      } else if (status === 404) {
        console.warn('Resource not found:', error.config.url);
      }
    } else if (error.request) {
      console.error('Network error - no response received');
    } else {
      console.error('Error setting up request:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api;