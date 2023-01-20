import { IRefreshTokenModel, IRefreshToken } from "../entities/RefreshToken";
import { IUserModel } from "../entities/User";

interface IRefreshTokenRepository {
  findRefreshTokenById(
    refreshTokenId: string
  ): Promise<IRefreshTokenModel | undefined | null>;
  createNewRefreshToken(
    user: IUserModel,
    expiresIn: number
  ): Promise<IRefreshTokenModel | null | undefined>;
  findRefreshTokenByIdUser(
    userId: string
  ): Promise<IRefreshTokenModel | null | undefined>;
}

export { IRefreshTokenRepository };
