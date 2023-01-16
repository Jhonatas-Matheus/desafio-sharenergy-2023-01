import { AppError } from "../../../errors/AppError";
import { Client, IClient, IClientModel } from "../../entities/Clients";
import { IUpdateClientDTO } from "../../usecases/clients/updateClienteUseCase/UpdateClientDTO";
import { IClientRepository } from "../IClientRepository";

class MongodbClientRepository implements IClientRepository {
  constructor(private repository = Client) {}
  async createClient(user: IClient): Promise<IClientModel | null | undefined> {
    const userToBeCreated = new Client({ ...user });
    try {
      const userSaved = await userToBeCreated.save();
      return userSaved;
    } catch (error) {
      throw new AppError(error as string);
    }
  }
  async updateClient(
    userId: string,
    user: IUpdateClientDTO
  ): Promise<IClientModel | null | undefined> {
    const userToBeFound = await this.repository.findOneAndUpdate(
      { id: userId },
      {
        $set: {
          ...user,
        },
      }
    );
    if (!userToBeFound) {
      throw new AppError("User not found", 404);
    }
    const userUpdated = await this.repository.findOne({ userId });
    return userUpdated;
  }
  async deleteClient(userId: string): Promise<void> {
    const userFound = await this.repository.findOneAndDelete({
      id: userId,
    });
    if (!userFound) {
      throw new AppError("User not found.", 404);
    }
  }
  async getSpecifClient(
    userId: string
  ): Promise<IClientModel | null | undefined> {
    const userToBeFound = await this.repository.findOne({ id: userId });
    if (!userToBeFound) {
      throw new AppError("User not found.", 404);
    }
    return userToBeFound;
  }
  async getAllClient(): Promise<IClientModel[] | null | undefined> {
    const allUsers = await this.repository.find();
    return allUsers;
  }
}

export { MongodbClientRepository };
