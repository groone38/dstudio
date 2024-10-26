import axios from "axios";

export const BASE_URL = "http://api.calmplete.net/api/";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default api;
