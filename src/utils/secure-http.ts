import axios, { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { auth } from '@/firebase';

const secureAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

// Add auth token to requests
secureAxios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const user = auth.currentUser;
      if (user && config.headers) {
        const token = await user.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.error('Error getting auth token:', error instanceof Error ? error.message : String(error));
      return config;
    }
  }
);

// Handle response errors
secureAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      await auth.signOut();
      window.location.href = '/admin';
    }
    return Promise.reject(error);
  }
);

export default secureAxios;
