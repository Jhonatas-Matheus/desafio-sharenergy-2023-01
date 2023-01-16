import { MongodbClientRepository } from "../../../repositories/implementations/MongodbClientRepository";
import { GetSpecificClientUseCase } from "./GetSpecifcUserUseCase";
import { GetSpecificClientController } from "./GetSpecificUserController";

const mongodbClientRepository = new MongodbClientRepository();
const getSpecificClientUseCase = new GetSpecificClientUseCase(
  mongodbClientRepository
);
const getSpecificClientController = new GetSpecificClientController(
  getSpecificClientUseCase
);
export { getSpecificClientController };
