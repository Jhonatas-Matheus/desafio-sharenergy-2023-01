import { AppError } from "../errors/AppError";
import { IUserModel } from "../modules/entities/User";
import { IUserRepository } from "../modules/repositories/IUserRepository";

class VerifyIfExistsHelp {
  constructor(
    private repository: IUserRepository,
    private username: string,
    private email: string = ""
  ) {}
  async verifyToCreate() {
    const userFoundByEmail = await this.repository.findUserByEmail(this.email, {
      password: false,
    });
    const userFoundByUsername = await this.repository.findUserByUsername(
      this.username,
      { password: false }
    );
    if (userFoundByEmail) {
      throw new AppError("Email is already in use.", 409);
    }
    if (userFoundByUsername) {
      throw new AppError("Username is already in use.", 409);
    }
  }
  async verifyToLogin(): Promise<Error | IUserModel | null | undefined> {
    const userFoundByUsername = await this.repository.findUserByUsername(
      this.username,
      { password: true }
    );
    if (userFoundByUsername === null || userFoundByUsername === undefined) {
      throw new AppError("Username or password invalid.", 409);
    } else {
      return userFoundByUsername;
    }
  }
}
export { VerifyIfExistsHelp };
