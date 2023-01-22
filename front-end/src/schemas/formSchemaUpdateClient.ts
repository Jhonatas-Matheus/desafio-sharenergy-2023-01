import * as yup from "yup"

const formSchemaUpdateClient = yup.object({
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

  export { formSchemaUpdateClient }