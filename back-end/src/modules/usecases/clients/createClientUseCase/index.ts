import { MongodbClientRepository } from "../../../repositories/implementations/MongodbClientRepository";
import { CreateClientController } from "./CreateClientController";
import { CreateClientUseCase } from "./CreateClientUseCase";

const mongodbClienteRepository = new MongodbClientRepository();
const createClientUseCase = new CreateClientUseCase(mongodbClienteRepository);
const createClientController = new CreateClientController(createClientUseCase);

export { createClientController };
