import axios from "axios";

export const apiLocal = axios.create({
  baseURL: "http://localhost:2580/",
  timeout: 5000,
});

export const apiRandomUser = axios.create({
  baseURL: "https://randomuser.me/api/",
  timeout: 5000,
});
