"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = __importDefault(require("express"));
const loginUser_1 = require("../modules/usecases/users/loginUser");
const loginRouter = (0, express_1.default)();
exports.loginRouter = loginRouter;
loginRouter.post("/", (req, res) => loginUser_1.loginUserController.handle(req, res));
