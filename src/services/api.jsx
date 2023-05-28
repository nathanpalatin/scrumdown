import axios from "axios";

import { AppError } from '"@utils/AppError';

const api = axios.create({
  baseURL: "http://0.0.0.0:3333",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    }
  }
);

export { api };
