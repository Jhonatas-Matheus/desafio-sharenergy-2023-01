import { MongodbClientRepository } from "../../../repositories/implementations/MongodbClientRepository";
import { UpdateClientController } from "./UpdateClientController";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

const mongodbClientRepository = new MongodbClientRepository();
const updateClientUseCase = new UpdateClientUseCase(mongodbClientRepository);
const updateClientController = new UpdateClientController(updateClientUseCase);

export { updateClientController };
