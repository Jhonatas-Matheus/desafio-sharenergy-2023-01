import { ObjectId } from "mongoose";

interface ICreateUserDTO {
  username: string;
  password: string;
  email: string;
}
interface ICreatedUserDTO {
  username: string;
  email: string;
  _id: string | ObjectId;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _doc: any;
}

export { ICreateUserDTO, ICreatedUserDTO };
