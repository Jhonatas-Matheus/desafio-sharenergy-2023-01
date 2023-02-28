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
exports.GetAllClientsController = void 0;
class GetAllClientsController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page } = req.query;
            const { limit } = req.query;
            const startIndex = (parseFloat(page) - 1) * parseFloat(limit);
            const endIndex = parseFloat(page) * parseFloat(limit);
            const data = yield this.useCase.execute();
            if (page && limit) {
                return res.status(200).json(data === null || data === void 0 ? void 0 : data.slice(startIndex, endIndex));
            }
            return res.status(200).json(data);
        });
    }
}
exports.GetAllClientsController = GetAllClientsController;
