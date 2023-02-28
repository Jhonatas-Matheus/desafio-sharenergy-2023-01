import axios from "axios";

export const apiLocal = axios.create({
  baseURL: "http://45.90.108.19:2580",
  timeout: 5000,
});

export const apiRandomUser = axios.create({
  baseURL: "https://randomuser.me/api/",
  timeout: 5000,
});

export const apiRandomDogs = axios.create({
  baseURL: "https://random.dog/",
  timeout: 5000,
});
