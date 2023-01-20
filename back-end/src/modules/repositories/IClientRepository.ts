import { IClient, IClientModel } from "../entities/Clients";
import { IUpdateClientDTO } from "../usecases/clients/updateClienteUseCase/UpdateClientDTO";

interface IClientRepository {
  createClient(user: IClient): Promise<IClientModel | null | undefined>;
  updateClient(
    userId: string,
    user: IUpdateClientDTO
  ): Promise<IClientModel | null | undefined>;
  deleteClient(userId: string): Promise<void>;
  getSpecifClient(userId: string): Promise<IClientModel | null | undefined>;
  getAllClient(): Promise<IClientModel[] | null | undefined>;
}
export { IClientRepository };
