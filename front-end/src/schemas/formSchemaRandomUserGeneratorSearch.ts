import * as yup from "yup";

const formSchemaRandomUserGeneratorSearch = yup.object().shape({
  search: yup.string(),
  filter: yup.string().required(),
});

export { formSchemaRandomUserGeneratorSearch };
