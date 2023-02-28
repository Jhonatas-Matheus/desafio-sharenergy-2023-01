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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserUseCase = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../../../../errors/AppError");
const bcrypt_helpers_1 = require("../../../../helpers/bcrypt.helpers");
class LoginUserUseCase {
    constructor(repositoryUser, repositoryRefreshToken) {
        this.repositoryUser = repositoryUser;
        this.repositoryRefreshToken = repositoryRefreshToken;
    }
    execute(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = yield this.repositoryUser.findUserByUsername(payload.username, { password: true });
            if (!userFound) {
                throw new AppError_1.AppError("User or password invalid.");
            }
            const passwordHash = new bcrypt_helpers_1.BcryptHelp(payload.password, userFound.password);
            const passwordVerify = yield passwordHash.compareHash();
            if (!passwordVerify) {
                throw new AppError_1.AppError("User or password invalid.");
            }
            const token = (0, jsonwebtoken_1.sign)({ userId: userFound.id }, process.env.SECRET_KEY, { expiresIn: "7d" });
            // return { token };
            const refreshTokenAlreadyExists = yield this.repositoryRefreshToken.findRefreshTokenByIdUser(userFound.id);
            if (!refreshTokenAlreadyExists) {
                const expiresIn = (0, dayjs_1.default)().add(365, "days").unix();
                const refreshTokenGenerate = yield this.repositoryRefreshToken.createNewRefreshToken(userFound.id, expiresIn);
                return { token, refreshToken: refreshTokenGenerate };
            }
            return { token };
        });
    }
}
exports.LoginUserUseCase = LoginUserUseCase;
