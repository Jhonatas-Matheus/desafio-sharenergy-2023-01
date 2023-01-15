import { sign } from "jsonwebtoken";

import { AppError } from "../../../../errors/AppError";
import { IRefreshTokenRepository } from "../../../repositories/IRefreshTokenRepository";
import { IRefreshTokenResponse } from "./RefreshTokenDTO";

class RefreshTokenUserUseCase {
  constructor(private repositoryRefreshToken: IRefreshTokenRepository) {}
  async execute(refresh_token: string): Promise<IRefreshTokenResponse> {
    const refreshToken = await this.repositoryRefreshToken.findRefreshTokenById(
      refresh_token
    );
    if (!refreshToken) {
      throw new AppError("Token is missing.", 400);
    }
    const refreshedToken = sign(
      { userId: refreshToken.id },
      process.env.SECRET_KEY as string,
      { expiresIn: "10s" }
    );
    return { token: refreshedToken };
  }
}
export { RefreshTokenUserUseCase };
