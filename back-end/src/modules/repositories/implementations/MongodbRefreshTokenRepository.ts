import dayjs from "dayjs";
import { MongoError, MongoServerError } from "mongodb";
import { MongooseError } from "mongoose";

import { AppError } from "../../../errors/AppError";
import { IRefreshTokenModel, RefreshToken } from "../../entities/RefreshToken";
import { IUserModel } from "../../entities/User";
import { IRefreshTokenRepository } from "../IRefreshTokenRepository";

class MongodbRefreshTokenRepository implements IRefreshTokenRepository {
  constructor(private repository = RefreshToken) {}
  async findRefreshTokenByIdUser(
    userId: string
  ): Promise<IRefreshTokenModel | null | undefined> {
    const refreshTokenFound = await this.repository.findOne({ user: userId });
    return refreshTokenFound;
  }
  async findRefreshTokenById(
    refreshTokenId: string
  ): Promise<IRefreshTokenModel | undefined | null> {
    try {
      const refresheTokenFound = await this.repository.findById(refreshTokenId);
      return refresheTokenFound;
    } catch (error) {
      throw new AppError("Token is not found", 404);
    }
  }
  async createNewRefreshToken(
    user: IUserModel,
    expiresIn: number
  ): Promise<IRefreshTokenModel | null | undefined> {
    const generateRefreshToken = new RefreshToken({
      user,
      expiresIn,
    });
    try {
      await generateRefreshToken.save();
      const tokenFound = await RefreshToken.findOne({ generateRefreshToken });
      return tokenFound;
    } catch (error) {
      throw new AppError(error as string);
    }
  }
}

export { MongodbRefreshTokenRepository };
