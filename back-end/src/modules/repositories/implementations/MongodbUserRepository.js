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
exports.MongodbUserRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AppError_1 = require("../../../errors/AppError");
const User_1 = require("../../entities/User");
class MongodbUserRepository {
    constructor(repository = User_1.User) {
        this.repository = repository;
    }
    findUserById(userId, { password }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (password) {
                const userFound = yield this.repository.findOne({ _id: userId });
                return userFound;
            }
            const userFound = yield this.repository
                .findOne({ _id: userId })
                .select("-password");
            return userFound;
        });
    }
    findUserByUsername(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (password) {
                const userFound = yield this.repository.findOne({ username });
                return userFound;
            }
            const userFound = yield this.repository
                .findOne({ username })
                .select("-password");
            return userFound;
        });
    }
    findUserByEmail(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (password) {
                const userFound = yield this.repository
                    .findOne({ email })
                    .select("-password");
                return userFound;
            }
            const userFound = yield this.repository
                .findOne({ email })
                .select("-password");
            return userFound;
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userToBeCreated = new User_1.User({
                _id: new mongoose_1.default.Types.ObjectId(),
                username: user.username,
                email: user.email,
                password: user.password,
            });
            const userSaved = yield userToBeCreated.save();
            const data = yield this.repository
                .findOne({ userSaved })
                .select("-password");
            if (data) {
                return data;
            }
            throw new AppError_1.AppError("Error when trying to create user please try again.", 400);
        });
    }
}
exports.MongodbUserRepository = MongodbUserRepository;
