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
      throw new Error("Email is already in use.");
    }
    if (userFoundByUsername) {
      throw new Error("Username is already in use.");
    }
  }
  async verifyToLogin(): Promise<Error | IUserModel | null | undefined> {
    const userFoundByUsername = await this.repository.findUserByUsername(
      this.username,
      { password: true }
    );
    if (userFoundByUsername === null || userFoundByUsername === undefined) {
      throw new Error("Username or password invalid.");
    } else {
      return userFoundByUsername;
    }
  }
}
export { VerifyIfExistsHelp };
