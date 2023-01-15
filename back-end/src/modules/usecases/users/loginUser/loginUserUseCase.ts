import dayjs from "dayjs";
import { sign } from "jsonwebtoken";

import { AppError } from "../../../../errors/AppError";
import { BcryptHelp } from "../../../../helpers/bcrypt.helpers";
import { IRefreshTokenModel } from "../../../entities/RefreshToken";
import { IRefreshTokenRepository } from "../../../repositories/IRefreshTokenRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ILoginUserRequestDTO, ILoginUserResponseDTO } from "./ILoginUserDTO";

class LoginUserUseCase {
  constructor(
    private repositoryUser: IUserRepository,
    private repositoryRefreshToken: IRefreshTokenRepository
  ) {}
  async execute(payload: ILoginUserRequestDTO): Promise<ILoginUserResponseDTO> {
    const userFound = await this.repositoryUser.findUserByUsername(
      payload.username,
      { password: true }
    );
    if (!userFound) {
      throw new AppError("User or password invalid.");
    }
    const passwordHash = new BcryptHelp(payload.password, userFound.password);
    const passwordVerify = await passwordHash.compareHash();
    if (!passwordVerify) {
      throw new AppError("User or password invalid.");
    }
    const token = sign(
      { userId: userFound.id },
      process.env.SECRET_KEY as string,
      { expiresIn: "7d" }
    );
    return { token };
    // const expiresIn = dayjs().add(365, "days").unix();
    // const refreshTokenGenerate =
    //   await this.repositoryRefreshToken.createNewRefreshToken(
    //     userFound.id,
    //     expiresIn
    //   );
    // return { token, refreshToken: refreshTokenGenerate };
  }
}
export { LoginUserUseCase };
