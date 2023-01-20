import { IClientRepository } from "../../../repositories/IClientRepository";

class DeleteClientUseCase {
  constructor(private repository: IClientRepository) {}
  async execute(userId: string): Promise<void> {
    await this.repository.deleteClient(userId);
  }
}
export { DeleteClientUseCase };
