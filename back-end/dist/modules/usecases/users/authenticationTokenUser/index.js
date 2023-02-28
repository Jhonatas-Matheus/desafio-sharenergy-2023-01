"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationTokenUserController = void 0;
const MongodbUserRepository_1 = require("../../../repositories/implementations/MongodbUserRepository");
const AuthenticationTokenUserController_1 = require("./AuthenticationTokenUserController");
const AuthenticationTokenUserUseCase_1 = require("./AuthenticationTokenUserUseCase");
const mongodbUserRepository = new MongodbUserRepository_1.MongodbUserRepository();
const authenticationTokenUserUseCase = new AuthenticationTokenUserUseCase_1.AuthenticationTokenUserUseCase(mongodbUserRepository);
const authenticationTokenUserController = new AuthenticationTokenUserController_1.AuthenticationTokenUserController(authenticationTokenUserUseCase);
exports.authenticationTokenUserController = authenticationTokenUserController;
