import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // Cookies
});

api.interceptors.request.use(
  async (config: AxiosRequestConfig | any) => {
    // si tiene token se añade al header de la peticion.
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }

    return config;
  },

  (error: any) => {
    return Promise.reject(error);
  }
);

export { api };
