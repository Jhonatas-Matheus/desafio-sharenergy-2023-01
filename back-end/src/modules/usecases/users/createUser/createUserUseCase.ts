import { BcryptHelp } from "../../../../helpers/bcrypt.helpers";
import { VerifyIfExistsHelp } from "../../../../helpers/verifyIfExists.helpers";
import { IUserModel } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}
  async execute(payload: ICreateUserDTO): Promise<IUserModel> {
    const verify = new VerifyIfExistsHelp(
      this.repository,
      payload.username,
      payload.email
    );
    await verify.verifyToCreate();
    const passwordHash = new BcryptHelp(payload.password);
    const { email, username } = payload;
    const password = await passwordHash.hashPassword();
    const data = this.repository.createUser({
      email,
      username,
      password,
    });
    return data;
  }
}

export { CreateUserUseCase };
