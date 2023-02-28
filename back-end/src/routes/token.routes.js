"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenRouter = void 0;
const express_1 = __importDefault(require("express"));
const authenticationTokenUser_1 = require("../modules/usecases/users/authenticationTokenUser");
const tokenRouter = (0, express_1.default)();
exports.tokenRouter = tokenRouter;
tokenRouter.post("/", (req, res) => authenticationTokenUser_1.authenticationTokenUserController.handle(req, res));
