import { IAddress } from "../../../entities/Clients";

interface IUpdateClientDTO {
  name?: string;
  email?: string;
  phone?: string;
  address?: IAddress;
  cpf?: string;
}

export { IUpdateClientDTO };
