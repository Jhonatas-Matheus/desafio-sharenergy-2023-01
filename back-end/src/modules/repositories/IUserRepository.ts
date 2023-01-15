import { IUser, IUserModel } from "../entities/User";

interface IDisplayPassword {
  password: boolean;
}
interface IUserRepository {
  createUser(user: IUser): Promise<IUserModel>;
  findUserByUsername(
    username: string,
    password: IDisplayPassword
  ): Promise<IUserModel | undefined | null>;
  findUserByEmail(
    email: string,
    password: IDisplayPassword
  ): Promise<IUserModel | undefined | null>;
}

export { IUserRepository, IDisplayPassword };
