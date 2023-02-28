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
exports.BcryptHelp = void 0;
const bcrypt_1 = require("bcrypt");
const AppError_1 = require("../errors/AppError");
class BcryptHelp {
    constructor(passwordToHash, hashedPassword = "") {
        this.passwordToHash = passwordToHash;
        this.hashedPassword = hashedPassword;
    }
    hashPassword() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, bcrypt_1.hash)(this.passwordToHash, 9);
        });
    }
    compareHash() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hashedPassword) {
                return (0, bcrypt_1.compare)(this.passwordToHash, this.hashedPassword);
            }
            throw new AppError_1.AppError("Miss hashed password.", 400);
        });
    }
}
exports.BcryptHelp = BcryptHelp;
