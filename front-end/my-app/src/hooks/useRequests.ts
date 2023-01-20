import axios, { AxiosResponse } from "axios";
import { IClientCRUD, IClientCRUDToUpdate } from "../pages/CrudPage";
import { apiLocal } from "../services/api";
import { IClient, IClientToUpdate } from "./useValidateForm";
export interface IUserLoginResponse {
  token: string;
}
export interface IUserLoginRequest {
  username: string;
  password: string;
}
const useRequests = () => {
  const useLogin = async (
    user: IUserLoginRequest
  ): Promise<IUserLoginResponse> => {
    const payload = await apiLocal.post("/login", user);
    return payload.data as IUserLoginResponse;
  };
  const createClient = async (data: IClient) => {
    apiLocal.post("client", data, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    });
  };
  const getClients = async (): Promise<IClientCRUD[]> => {
    const response: AxiosResponse = await apiLocal.get("client", {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    });
    return response.data as IClientCRUD[];
  };
  const getSpecificClient = async (idClient: string) => {
    const response: AxiosResponse = await apiLocal.get(`client/${idClient}`, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    });
    return response.data as IClientCRUD;
  };
  const updateClient = async (data: IClientToUpdate, idClient: string) => {
    apiLocal.patch(`client/${idClient}`, data, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    });
  };
  const deleteClient = async (idClient: string) => {
    apiLocal.delete(`client/${idClient}`, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    });
  };
  return {
    useLogin,
    createClient,
    getClients,
    getSpecificClient,
    updateClient,
    deleteClient,
  };
};

export { useRequests };
