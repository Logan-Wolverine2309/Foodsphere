import axios from "axios";

export const API_URL = "http://localhost:8080";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Add token automatically if it exists in localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Or sessionStorage, wherever you store it
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
