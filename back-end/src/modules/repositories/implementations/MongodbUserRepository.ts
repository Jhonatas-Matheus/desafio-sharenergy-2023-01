import mongoose from "mongoose";

import { User, IUser, IUserModel } from "../../entities/User";
import { ICreateUserDTO } from "../../usecases/users/createUser/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";

class MongodbUserRepository implements IUserRepository {
  constructor(private repository = User) {}
  async findUserByUsername(
    username: string,
    { password }
  ): Promise<IUserModel | undefined | null> {
    if (password) {
      const userFound = await this.repository.findOne({ username });
      return userFound;
    }
    const userFound = await this.repository
      .findOne({ username })
      .select("-password");
    return userFound;
  }
  async findUserByEmail(
    email: string,
    { password }
  ): Promise<IUserModel | undefined | null> {
    if (password) {
      const userFound = await this.repository
        .findOne({ email })
        .select("-password");
      return userFound;
    }
    const userFound = await this.repository.findOne({ email });
    // .select("-password");
    return userFound;
  }
  async createUser(user: ICreateUserDTO): Promise<IUserModel> {
    const userCreated = new User({
      _id: new mongoose.Types.ObjectId(),
      username: user.username,
      email: user.email,
      password: user.password,
    });
    const { _id } = await userCreated.save();
    const verifyCreate = await this.repository
      .findOne({ _id })
      .select("-password");
    if (!verifyCreate) {
      throw new Error("Deu ruim");
    }
    return verifyCreate;
  }
}

export { MongodbUserRepository };
