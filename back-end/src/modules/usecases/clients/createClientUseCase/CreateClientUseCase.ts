import { IClientRepository } from "../../../repositories/IClientRepository";
import { ICreateClientDTO } from "./CreateClientDTO";

class CreateClientUseCase {
  constructor(private repository: IClientRepository) {}
  async execute(user: ICreateClientDTO) {
    const data = await this.repository.createClient({ ...user });
    return data;
  }
}
export { CreateClientUseCase };
