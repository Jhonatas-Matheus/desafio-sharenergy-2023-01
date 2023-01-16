import { IClientRepository } from "../../../repositories/IClientRepository";
import { ICreatedClientDTO } from "../createClientUseCase/CreateClientDTO";
import { IUpdateClientDTO } from "./UpdateClientDTO";

class UpdateClientUseCase {
  constructor(private repository: IClientRepository) {}
  async execute(
    user: IUpdateClientDTO,
    userId: string
  ): Promise<ICreatedClientDTO | null | undefined> {
    const data = await this.repository.updateClient(userId, { ...user });
    return data;
  }
}

export { UpdateClientUseCase };
