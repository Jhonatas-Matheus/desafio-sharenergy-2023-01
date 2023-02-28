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
exports.RefreshTokenUserUseCase = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../../../../errors/AppError");
class RefreshTokenUserUseCase {
    constructor(repositoryRefreshToken) {
        this.repositoryRefreshToken = repositoryRefreshToken;
    }
    execute(refresh_token) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshToken = yield this.repositoryRefreshToken.findRefreshTokenById(refresh_token);
            if (!refreshToken) {
                throw new AppError_1.AppError("Token is missing.", 400);
            }
            const expiresIn = (0, dayjs_1.default)().add(2, "hours").unix();
            const refreshedToken = (0, jsonwebtoken_1.sign)({ userId: refreshToken.id }, process.env.SECRET_KEY, { expiresIn });
            return { token: refreshedToken };
        });
    }
}
exports.RefreshTokenUserUseCase = RefreshTokenUserUseCase;
