"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDefaulUserHelpers = void 0;
const User_1 = require("../modules/entities/User");
const bcrypt_helpers_1 = require("./bcrypt.helpers");
class CreateDefaulUserHelpers {
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            const passwordHashed = new bcrypt_helpers_1.BcryptHelp("sh@r3n3rgy");
            const defaultUser = {
                username: "desafiosharenergy",
                password: yield passwordHashed.hashPassword(),
                email: "sharenergy@mail.com",
            };
            const userAlreadyExists = yield User_1.User.findOne({
                username: defaultUser.username,
            });
            if (userAlreadyExists) {
                return console.log("Usuário default já cadastrado");
            }
            const userToBeCreated = new User_1.User(defaultUser);
            userToBeCreated.save();
            return console.log("Usuário defaul cadastrado com sucesso.");
        });
    }
}
exports.CreateDefaulUserHelpers = CreateDefaulUserHelpers;
