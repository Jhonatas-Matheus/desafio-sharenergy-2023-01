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
exports.VerifyIfExistsHelp = void 0;
const AppError_1 = require("../errors/AppError");
class VerifyIfExistsHelp {
    constructor(repository, username, email = "") {
        this.repository = repository;
        this.username = username;
        this.email = email;
    }
    verifyToCreate() {
        return __awaiter(this, void 0, void 0, function* () {
            const userFoundByEmail = yield this.repository.findUserByEmail(this.email, {
                password: false,
            });
            const userFoundByUsername = yield this.repository.findUserByUsername(this.username, { password: false });
            if (userFoundByEmail) {
                throw new AppError_1.AppError("Email is already in use.", 409);
            }
            if (userFoundByUsername) {
                throw new AppError_1.AppError("Username is already in use.", 409);
            }
        });
    }
    verifyToLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            const userFoundByUsername = yield this.repository.findUserByUsername(this.username, { password: true });
            if (userFoundByUsername === null || userFoundByUsername === undefined) {
                throw new AppError_1.AppError("Username or password invalid.", 409);
            }
            else {
                return userFoundByUsername;
            }
        });
    }
}
exports.VerifyIfExistsHelp = VerifyIfExistsHelp;
