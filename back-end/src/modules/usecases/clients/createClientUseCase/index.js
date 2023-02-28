"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientController = void 0;
const MongodbClientRepository_1 = require("../../../repositories/implementations/MongodbClientRepository");
const CreateClientController_1 = require("./CreateClientController");
const CreateClientUseCase_1 = require("./CreateClientUseCase");
const mongodbClienteRepository = new MongodbClientRepository_1.MongodbClientRepository();
const createClientUseCase = new CreateClientUseCase_1.CreateClientUseCase(mongodbClienteRepository);
const createClientController = new CreateClientController_1.CreateClientController(createClientUseCase);
exports.createClientController = createClientController;
