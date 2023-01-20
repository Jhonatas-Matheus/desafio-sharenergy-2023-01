import { MongodbUserRepository } from "../../../repositories/implementations/MongodbUserRepository";
import { AuthenticationTokenUserController } from "./AuthenticationTokenUserController";
import { AuthenticationTokenUserUseCase } from "./AuthenticationTokenUserUseCase";

const mongodbUserRepository = new MongodbUserRepository();
const authenticationTokenUserUseCase = new AuthenticationTokenUserUseCase(
  mongodbUserRepository
);
const authenticationTokenUserController = new AuthenticationTokenUserController(
  authenticationTokenUserUseCase
);
export { authenticationTokenUserController };
