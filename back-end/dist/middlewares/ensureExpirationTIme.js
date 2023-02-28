"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenExpire = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyTokenExpire = (req, res, next) => {
    var _a;
    const authToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    const tokenDecoded = (0, jsonwebtoken_1.decode)(authToken);
    //   const dateCauculated = dayjs().
    //   const tokenExpired = dayjs().isAfter();
    return next();
};
exports.verifyTokenExpire = verifyTokenExpire;
