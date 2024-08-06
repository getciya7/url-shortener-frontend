import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://url-shortener-ejev.onrender.com",
});

export default axiosInstance;
