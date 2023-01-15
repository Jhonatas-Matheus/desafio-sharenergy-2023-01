import { MongodbUserRepository } from "../../../repositories/implementations/MongodbUserRepository";
import { LoginUserController } from "./loginUserController";
import { LoginUserUseCase } from "./loginUserUseCase";

const mongodbUserRepository = new MongodbUserRepository();
const loginUserUseCase = new LoginUserUseCase(mongodbUserRepository);
const loginUserController = new LoginUserController(loginUserUseCase);
export { loginUserController };
