import mongoose, { Document } from "mongoose";

// nome, email, telefone, endereço e cpf.
interface IAddress {
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  zipCode: string;
  state?: string;
  country: string;
}
interface IClient {
  name: string;
  email: string;
  phone: string;
  address: IAddress;
  cpf: string;
}

interface IClientModel extends IClient, Document {}

const client = new mongoose.Schema<IClient>({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: Object },
  cpf: { type: String },
});

const Client = mongoose.model<IClientModel>("Client", client);

export { Client, IClient, IClientModel, IAddress };
