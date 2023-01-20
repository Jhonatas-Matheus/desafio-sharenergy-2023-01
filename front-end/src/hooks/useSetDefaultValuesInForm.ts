import { IClientCRUD } from "../pages/CrudPage";
import { useValidateFormUpdate } from "./useValidateForm";

const useSetDefaultValuesInForm = () => {
  const { setValue } = useValidateFormUpdate();
  const setDefaultValue = (client: IClientCRUD) => {
    if (client) {
      setValue("name", client.name);
      setValue("email", client.email);
      setValue("phone", client.phone);
      setValue("address.zipCode", client.address.zipCode);
      setValue("cpf", client.cpf);
    }
  };
  return { setDefaultValue };
};

export { useSetDefaultValuesInForm };
