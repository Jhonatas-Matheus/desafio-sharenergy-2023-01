"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsRouter = void 0;
const express_1 = __importDefault(require("express"));
const createClientUseCase_1 = require("../modules/usecases/clients/createClientUseCase");
const deleteClientUseCase_1 = require("../modules/usecases/clients/deleteClientUseCase");
const listAllClientsUseCase_1 = require("../modules/usecases/clients/listAllClientsUseCase");
const listSpecifUserUseCase_1 = require("../modules/usecases/clients/listSpecifUserUseCase");
const updateClienteUseCase_1 = require("../modules/usecases/clients/updateClienteUseCase");
const clientsRouter = (0, express_1.default)();
exports.clientsRouter = clientsRouter;
clientsRouter.post("/", (req, res) => createClientUseCase_1.createClientController.handle(req, res));
clientsRouter.patch("/:id", (req, res) => updateClienteUseCase_1.updateClientController.handle(req, res));
clientsRouter.delete("/:id", (req, res) => deleteClientUseCase_1.deleteClientController.handle(req, res));
clientsRouter.get("/:id", (req, res) => listSpecifUserUseCase_1.getSpecificClientController.handle(req, res));
clientsRouter.get("/", (req, res) => {
    listAllClientsUseCase_1.getAllClientsController.handle(req, res);
});
