"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenVerify = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../errors/AppError");
const tokenVerify = (req, res, next) => {
    var _a;
    const authToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!authToken) {
        throw new AppError_1.AppError("Token is missing.", 401);
    }
    try {
        (0, jsonwebtoken_1.verify)(authToken, process.env.SECRET_KEY);
        const tokenDecoded = (0, jsonwebtoken_1.decode)(authToken);
        req.userId = tokenDecoded.userId;
        return next();
    }
    catch (error) {
        throw new AppError_1.AppError(error, 401);
    }
};
exports.tokenVerify = tokenVerify;
