import { apiLocal } from "../services/api";
export interface IUserLoginResponse {
  token: string;
}
export interface IUserLoginRequest {
  username: string;
  password: string;
}
const useLogin = async (
  user: IUserLoginRequest
): Promise<IUserLoginResponse> => {
  const payload = await apiLocal.post("/login", user);
  console.log(payload);
  return payload.data as IUserLoginResponse;
};

export { useLogin };
