import { MongodbUserRepository } from "../../../repositories/implementations/MongodbUserRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

const mongodbUserRepository = new MongodbUserRepository();
const createUserUseCase = new CreateUserUseCase(mongodbUserRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
