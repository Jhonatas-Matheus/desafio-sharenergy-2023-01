import Router from "express";

import { createUserController } from "../modules/usecases/users/createUser/index";

const registerRouter = Router();

registerRouter.post("/", (req, res) => createUserController.handle(req, res));

export { registerRouter };
