/* eslint-disable no-useless-escape */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { formSchemaCreateClient } from "../schemas/formSchemaCreateClient";
import { formSchemaUpdateClient } from "../schemas/formSchemaUpdateClient";
import { formSchemaRandomUserGeneratorSearch } from "../schemas/formSchemaRandomUserGeneratorSearch";

interface IAddress {
  street: string;
  zipCode: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
}
export interface IClient {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: IAddress;
}
export interface IClientToUpdate {
  name?: string;
  email?: string;
  phone?: string;
  cpf?: string;
  address?: IAddress;
}
export interface ISearchRandomUserGenarete {
  search: string;
  filter: "name" | "email" | "username" | "";
}
const useValidateFormCreate = () => {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IClient>({
    resolver: yupResolver(formSchemaCreateClient),
  });
  return { register, handleSubmit, errors, reset, control };
};
const useValidateFormUpdate = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IClientToUpdate>({
    resolver: yupResolver(formSchemaUpdateClient),
  });
  return { register, handleSubmit, errors, reset, setValue };
};

const useValidateFormSearchRandomUser = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    unregister,
    reset,
    formState: { errors },
  } = useForm<ISearchRandomUserGenarete>({
    resolver: yupResolver(formSchemaRandomUserGeneratorSearch),
  });
  return { register, handleSubmit, reset, errors, setFocus, unregister };
};

export {
  useValidateFormCreate,
  useValidateFormUpdate,
  useValidateFormSearchRandomUser,
};
