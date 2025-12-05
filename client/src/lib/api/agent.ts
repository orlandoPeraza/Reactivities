import axios from "axios";
import { store } from "../stores/store";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

const agent = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

agent.interceptors.request.use(
  (config) => {
    store.uiStore.startLoading();
    return config;
  },
  (error) => {
    store.uiStore.stopLoading();
    return Promise.reject(error);
  }
);

agent.interceptors.response.use(
  async (response) => {
    await sleep(1000);
    store.uiStore.stopLoading();
    return response;
  },
  (error) => {
    store.uiStore.stopLoading();
    return Promise.reject(error);
  }
);

export default agent;
