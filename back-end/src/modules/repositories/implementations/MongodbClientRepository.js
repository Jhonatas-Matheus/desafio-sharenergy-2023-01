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
exports.MongodbClientRepository = void 0;
const AppError_1 = require("../../../errors/AppError");
const Clients_1 = require("../../entities/Clients");
class MongodbClientRepository {
    constructor(repository = Clients_1.Client) {
        this.repository = repository;
    }
    createClient(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userToBeCreated = new Clients_1.Client(Object.assign({}, user));
            try {
                const userSaved = yield userToBeCreated.save();
                return userSaved;
            }
            catch (error) {
                throw new AppError_1.AppError(error);
            }
        });
    }
    updateClient(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userToBeFound = yield this.repository.findOneAndUpdate({ _id: userId }, {
                $set: Object.assign({}, user),
            });
            if (!userToBeFound) {
                throw new AppError_1.AppError("User not found", 404);
            }
            const userUpdated = yield this.repository.findOne({ _id: userId });
            return userUpdated;
        });
    }
    deleteClient(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = yield this.repository.findOneAndDelete({
                id: userId,
            });
            if (!userFound) {
                throw new AppError_1.AppError("User not found.", 404);
            }
        });
    }
    getSpecifClient(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userToBeFound = yield this.repository.findOne({ _id: userId });
            if (!userToBeFound) {
                throw new AppError_1.AppError("User not found.", 404);
            }
            return userToBeFound;
        });
    }
    getAllClient() {
        return __awaiter(this, void 0, void 0, function* () {
            const allUsers = yield this.repository.find();
            return allUsers;
        });
    }
}
exports.MongodbClientRepository = MongodbClientRepository;
