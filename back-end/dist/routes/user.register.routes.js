"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRouter = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = require("../modules/usecases/users/createUser/index");
const registerRouter = (0, express_1.default)();
exports.registerRouter = registerRouter;
registerRouter.post("/", (req, res) => index_1.createUserController.handle(req, res));
