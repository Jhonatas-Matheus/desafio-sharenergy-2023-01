import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { apiLocal } from "../services/api";
export interface IUserResponse {
  _id: string;
  username: string;
  email: string;
  createdAt: string;
  updateAt: string;
}
const useAuthentication = async (): Promise<IUserResponse | void> => {
  const navigate = useNavigate();
  let tokenOfSessionStorage = "";
  if (sessionStorage.getItem("token")) {
    tokenOfSessionStorage = sessionStorage.getItem("token") as string;
  }
  const tokenOfLocalStorage = localStorage.getItem("token");
  if (tokenOfLocalStorage) {
    sessionStorage.setItem("token", tokenOfLocalStorage);
  }
  // const tokenOfSessionStorage = sessionStorage.getItem("token");
  // if (!tokenOfLocalStorage && !tokenOfSessionStorage) {
  //   return navigate("/");
  // }
  try {
    const response = (await apiLocal.post(
      "/token",
      { token: tokenOfSessionStorage },
      {
        headers: {
          Authorization: "Bearer " + tokenOfSessionStorage,
        },
      }
    )) as AxiosResponse;
    const currentUser = response.data;
    // console.log(currentUser);
    return currentUser;
  } catch (error) {
    if (error instanceof AxiosError) {
      // console.log(error.response?.data.message);
    }
    console.log(error);
  }
};
export { useAuthentication };
