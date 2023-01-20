import { decode, JsonWebTokenError, JwtPayload, verify } from "jsonwebtoken";

import { AppError } from "../../../../errors/AppError";
import { IJwtPayloadPerson } from "../../../../middlewares/ensureAuthentication";
import { IUserRepository } from "../../../repositories/IUserRepository";

class AuthenticationTokenUserUseCase {
  constructor(private repository: IUserRepository) {}
  async execute(payload: string) {
    try {
      verify(payload, process.env.SECRET_KEY as string);
      const decoded = decode(payload) as IJwtPayloadPerson;
      const data = await this.repository.findUserById(decoded.userId, {
        password: false,
      });
      return data;
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        throw new AppError(error.message);
      }
      throw new AppError("Internal server error", 500);
    }
  }
}
export { AuthenticationTokenUserUseCase };
