import axios from "axios";

const apiService = axios.create({
  baseURL: "/api",
  responseType: "json",
});

apiService.interceptors.response.use(
  (response) => response.data,
  (error) => {
    throw error;
  }
);

export default apiService;
