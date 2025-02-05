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
exports.MongodbRefreshTokenRepository = void 0;
const AppError_1 = require("../../../errors/AppError");
const RefreshToken_1 = require("../../entities/RefreshToken");
class MongodbRefreshTokenRepository {
    constructor(repository = RefreshToken_1.RefreshToken) {
        this.repository = repository;
    }
    findRefreshTokenByIdUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshTokenFound = yield this.repository.findOne({ user: userId });
            return refreshTokenFound;
        });
    }
    findRefreshTokenById(refreshTokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const refresheTokenFound = yield this.repository.findById(refreshTokenId);
                return refresheTokenFound;
            }
            catch (error) {
                throw new AppError_1.AppError("Token is not found", 404);
            }
        });
    }
    createNewRefreshToken(user, expiresIn) {
        return __awaiter(this, void 0, void 0, function* () {
            const generateRefreshToken = new RefreshToken_1.RefreshToken({
                user,
                expiresIn,
            });
            try {
                yield generateRefreshToken.save();
                const tokenFound = yield RefreshToken_1.RefreshToken.findOne({ generateRefreshToken });
                return tokenFound;
            }
            catch (error) {
                throw new AppError_1.AppError(error);
            }
        });
    }
}
exports.MongodbRefreshTokenRepository = MongodbRefreshTokenRepository;
