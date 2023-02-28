"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshRouter = void 0;
const express_1 = __importDefault(require("express"));
const ensureAuthentication_1 = require("../middlewares/ensureAuthentication");
const refreshtokenUser_1 = require("../modules/usecases/users/refreshtokenUser");
const refreshRouter = (0, express_1.default)();
exports.refreshRouter = refreshRouter;
refreshRouter.use(ensureAuthentication_1.tokenVerify);
refreshRouter.post("/", (req, res) => refreshtokenUser_1.refreshTokenUserController.handle(req, res));
