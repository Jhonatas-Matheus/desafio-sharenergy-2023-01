import { User } from "../modules/entities/User";
import { BcryptHelp } from "./bcrypt.helpers";

class CreateDefaulUserHelpers {
  static async create() {
    const passwordHashed = new BcryptHelp("sh@r3n3rgy");
    const defaultUser = {
      username: "desafiosharenergy",
      password: await passwordHashed.hashPassword(),
      email: "sharenergy@mail.com",
    };
    const userAlreadyExists = await User.findOne({
      username: defaultUser.username,
    });
    if (userAlreadyExists) {
      return console.log("Usuário default já cadastrado");
    }
    const userToBeCreated = new User(defaultUser);
    userToBeCreated.save();
    return console.log("Usuário defaul cadastrado com sucesso.");
  }
}

export { CreateDefaulUserHelpers };
