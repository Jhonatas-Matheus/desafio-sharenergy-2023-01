import { MongodbRefreshTokenRepository } from "../../../repositories/implementations/MongodbRefreshTokenRepository";
import { MongodbUserRepository } from "../../../repositories/implementations/MongodbUserRepository";
import { LoginUserController } from "./loginUserController";
import { LoginUserUseCase } from "./loginUserUseCase";

const mongodbUserRepository = new MongodbUserRepository();
const mongodbRefreshTokenRepository = new MongodbRefreshTokenRepository();
const loginUserUseCase = new LoginUserUseCase(
  mongodbUserRepository,
  mongodbRefreshTokenRepository
);
const loginUserController = new LoginUserController(loginUserUseCase);
export { loginUserController };
