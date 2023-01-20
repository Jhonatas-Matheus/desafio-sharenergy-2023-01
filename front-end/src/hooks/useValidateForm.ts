/* eslint-disable no-useless-escape */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const useValidateFormCreate = () => {
  const formSchemaCreate = yup.object({
    name: yup.string().required("O campo é obrigatório."),
    email: yup
      .string()
      .required("O email é obgrigatório.")
      .email("Deve ser um email."),
    phone: yup
      .string()
      .required("O número de telefone é obrigatório.")
      .matches(
        /\([[0-9]{2}\)\s9[0-9]{4}\-[0-9]{4}/gm,
        "O padrão de celular não aceito."
      ),
    cpf: yup
      .string()
      .required("O CPF é obrigatório")
      .matches(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/gm, "CPF inválido."),
    address: yup.object({
      zipCode: yup
        .string()
        .required("O cep é obrigatório.")
        .matches(/[0-9]{5}\-[0-9]{3}/gm, "O CEP é inválido."),
      number: yup.string().required("O número é obrigatório."),
      neighborhood: yup.string().required("O bairro é obrigatório."),
      city: yup.string().required("A cidade é obrigatório."),
      street: yup.string().required("A rua é obrigatória."),
      state: yup
        .string()
        .required("O estado é obrigatório.")
        .max(2, "O estado deve ser sua abreviação"),
    }),
  });
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IClient>({
    resolver: yupResolver(formSchemaCreate),
  });
  return { register, handleSubmit, errors, reset, control };
};
const useValidateFormUpdate = () => {
  const formSchemaUpdate = yup.object({
    name: yup.string().optional(),
    email: yup.string().email("Deve ser um email.").optional(),
    phone: yup.string().notRequired(),
    cpf: yup.string().optional().notRequired(),
    address: yup.object({
      zipCode: yup.string().optional().notRequired(),
      number: yup.string(),
      neighborhood: yup.string().optional(),
      city: yup.string().optional(),
      street: yup.string().optional(),
      state: yup.string().max(2, "O estado deve ser sua abreviação").optional(),
      country: yup.string().optional().notRequired(),
    }),
  });
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IClientToUpdate>({
    resolver: yupResolver(formSchemaUpdate),
  });
  return { register, handleSubmit, errors, reset, setValue };
};

export { useValidateFormCreate, useValidateFormUpdate };
