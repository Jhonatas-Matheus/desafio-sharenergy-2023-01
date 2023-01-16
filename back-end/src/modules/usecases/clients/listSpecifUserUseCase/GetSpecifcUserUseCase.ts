import { IClientRepository } from "../../../repositories/IClientRepository";
import { IResponseSpecificUserDTO } from "./GetSpecificUserDTO";

class GetSpecificClientUseCase {
  constructor(private repository: IClientRepository) {}
  async execute(
    userId: string
  ): Promise<IResponseSpecificUserDTO | null | undefined> {
    const data = await this.repository.getSpecifClient(userId);
    return data;
  }
}

export { GetSpecificClientUseCase };
