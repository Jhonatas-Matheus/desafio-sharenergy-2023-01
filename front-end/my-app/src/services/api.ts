import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:2580/",
  timeout: 5000,
});
