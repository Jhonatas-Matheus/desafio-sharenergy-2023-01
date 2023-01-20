import { MongodbClientRepository } from "../../../repositories/implementations/MongodbClientRepository";
import { GetAllClientsController } from "./GetAllClientsController";
import { GetAllClientsUseCase } from "./GetAllClientsUseCase";

const mongodbClientsRepository = new MongodbClientRepository();
const getAllClientsUseCase = new GetAllClientsUseCase(mongodbClientsRepository);
const getAllClientsController = new GetAllClientsController(
  getAllClientsUseCase
);

export { getAllClientsController };
