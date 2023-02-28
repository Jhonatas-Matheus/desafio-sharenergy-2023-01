"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshToken = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const refreshToken = new mongoose_1.default.Schema({
    expiresIn: { type: Number },
    user: {
        unique: true,
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
});
const RefreshToken = mongoose_1.default.model("RefreshToken", refreshToken);
exports.RefreshToken = RefreshToken;
