import { MongodbRefreshTokenRepository } from "../../../repositories/implementations/MongodbRefreshTokenRepository";
import { RefreshTokenUserController } from "./RefreshTokenController";
import { RefreshTokenUserUseCase } from "./RefreshTokenUseCase";

const mongodbRefreshTokenRepository = new MongodbRefreshTokenRepository();

const refreshTokenUserUseCase = new RefreshTokenUserUseCase(
  mongodbRefreshTokenRepository
);

const refreshTokenUserController = new RefreshTokenUserController(
  refreshTokenUserUseCase
);

export { refreshTokenUserController };
