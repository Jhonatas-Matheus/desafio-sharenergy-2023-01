import { MongodbClientRepository } from "../../../repositories/implementations/MongodbClientRepository";
import { DeleteClientController } from "./DeleteClientController";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

const mongodbClientRepository = new MongodbClientRepository();
const deleteClientUseCase = new DeleteClientUseCase(mongodbClientRepository);
const deleteClientController = new DeleteClientController(deleteClientUseCase);
export { deleteClientController };
