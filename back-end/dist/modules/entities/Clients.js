"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const client = new mongoose_1.default.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: Object },
    cpf: { type: String },
});
const Client = mongoose_1.default.model("Client", client);
exports.Client = Client;
