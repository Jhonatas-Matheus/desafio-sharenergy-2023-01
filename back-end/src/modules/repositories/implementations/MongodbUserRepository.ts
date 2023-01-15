import mongoose from "mongoose";

import { AppError } from "../../../errors/AppError";
import { User, IUser, IUserModel } from "../../entities/User";
import { ICreateUserDTO } from "../../usecases/users/createUser/ICreateUserDTO";
import { IDisplayPassword, IUserRepository } from "../IUserRepository";

class MongodbUserRepository implements IUserRepository {
  constructor(private repository = User) {}
  async findUserById(
    userId: string,
    password: IDisplayPassword
  ): Promise<IUserModel | null | undefined> {
    if (password) {
      const userFound = await this.repository.findOne({ id: userId });
      return userFound;
    }
    const userFound = await this.repository
      .findOne({ id: userId })
      .select("-password");
    return userFound;
  }
  async findUserByUsername(
    username: string,
    password: IDisplayPassword
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
    password: IDisplayPassword
  ): Promise<IUserModel | undefined | null> {
    if (password) {
      const userFound = await this.repository
        .findOne({ email })
        .select("-password");
      return userFound;
    }
    const userFound = await this.repository
      .findOne({ email })
      .select("-password");
    return userFound;
  }
  async createUser(user: ICreateUserDTO): Promise<IUserModel> {
    const userToBeCreated = new User({
      _id: new mongoose.Types.ObjectId(),
      username: user.username,
      email: user.email,
      password: user.password,
    });
    const userSaved = await userToBeCreated.save();
    const data = await this.repository
      .findOne({ userSaved })
      .select("-password");
    if (data) {
      return data;
    }
    throw new AppError(
      "Error when trying to create user please try again.",
      400
    );
  }
}

export { MongodbUserRepository };
