import { sign } from "jsonwebtoken";

import { BcryptHelp } from "../../../../helpers/bcrypt.helpers";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ILoginUserRequestDTO, ILoginUserResponseDTO } from "./ILoginUserDTO";

class LoginUserUseCase {
  constructor(private repository: IUserRepository) {}
  // eslint-disable-next-line consistent-return
  async execute(payload: ILoginUserRequestDTO): Promise<ILoginUserResponseDTO> {
    const userFound = await this.repository.findUserByUsername(
      payload.username,
      { password: true }
    );
    if (!userFound) {
      throw new Error("User or password invalid.");
    }
    const passwordHash = new BcryptHelp(payload.password, userFound.password);
    const passwordVerify = await passwordHash.compareHash();
    if (!passwordVerify) {
      throw new Error("User or password invalid.");
    }
    const token = sign(
      { username: userFound.username, userId: userFound.id },
      process.env.SECRET_KEY as string,
      { expiresIn: "10s" }
    );
    return { token };
  }
}
export { LoginUserUseCase };
