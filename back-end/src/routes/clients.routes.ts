import Router from "express";

import { createClientController } from "../modules/usecases/clients/createClientUseCase";
import { deleteClientController } from "../modules/usecases/clients/deleteClientUseCase";
import { getAllClientsController } from "../modules/usecases/clients/listAllClientsUseCase";
import { getSpecificClientController } from "../modules/usecases/clients/listSpecifUserUseCase";
import { updateClientController } from "../modules/usecases/clients/updateClienteUseCase";

const clientsRouter = Router();

clientsRouter.post("/", (req, res) => createClientController.handle(req, res));
clientsRouter.patch("/:id", (req, res) =>
  updateClientController.handle(req, res)
);
clientsRouter.delete("/:id", (req, res) =>
  deleteClientController.handle(req, res)
);
clientsRouter.get("/:id", (req, res) =>
  getSpecificClientController.handle(req, res)
);
clientsRouter.get("/", (req, res) => {
  getAllClientsController.handle(req, res);
});
export { clientsRouter };
