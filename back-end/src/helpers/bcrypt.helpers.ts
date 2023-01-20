import { compare, hashSync, hash } from "bcrypt";

import { AppError } from "../errors/AppError";

class BcryptHelp {
  constructor(
    private passwordToHash: string,
    private hashedPassword: string | undefined = ""
  ) {}
  async hashPassword(): Promise<string> {
    return hash(this.passwordToHash, 9);
  }
  async compareHash() {
    if (this.hashedPassword) {
      return compare(this.passwordToHash, this.hashedPassword);
    }
    throw new AppError("Miss hashed password.", 400);
  }
}
export { BcryptHelp };
