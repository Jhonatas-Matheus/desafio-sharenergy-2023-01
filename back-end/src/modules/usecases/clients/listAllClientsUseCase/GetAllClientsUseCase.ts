import { IClientRepository } from "../../../repositories/IClientRepository";
import { IGetAllClientsResponse } from "./GetAllClientsDTO";

class GetAllClientsUseCase {
  constructor(private repository: IClientRepository) {}
  async execute(): Promise<IGetAllClientsResponse | null | undefined> {
    const data = await this.repository.getAllClient();
    return data;
  }
}

export { GetAllClientsUseCase };
