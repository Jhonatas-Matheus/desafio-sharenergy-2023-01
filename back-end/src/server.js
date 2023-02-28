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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./app");
const createDefaultUser_helpers_1 = require("./helpers/createDefaultUser.helpers");
mongoose_1.default.set("strictQuery", true);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    return mongoose_1.default.connect(`mongodb+srv://jmdevbr:${process.env.PASSWORD_MONGODB_ATLAS}@shareenergyjhonatasmtes.wct5ksl.mongodb.net/?retryWrites=true&w=majority&ssl=true`);
});
try {
    main();
    createDefaultUser_helpers_1.CreateDefaulUserHelpers.create();
    app_1.app.listen(2580, () => console.log("Aplicação rodando na porta 2580"));
    console.log("Database conectado com sucesso");
}
catch (error) {
    console.log(error);
}
