import * as yup from "yup"

const formSchemaCreateClient = yup.object({
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

  export { formSchemaCreateClient }