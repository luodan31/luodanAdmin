import axios from "axios";
import router from "@/router";
import store from "@/store";

const fetchInstance = axios.create({
  baseURL: process.env.VUE_APP_FETCH_URL,
  timeout: 60000
});

// 请求拦截
fetchInstance.interceptors.request.use(config => {
  config.headers = {
    ...config.headers
  };

  return config;
});

// 响应拦截
fetchInstance.interceptors.response.use(response => {
  return response;
});

export default fetchInstance;
