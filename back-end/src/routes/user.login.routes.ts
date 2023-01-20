import Router from "express";

import { loginUserController } from "../modules/usecases/users/loginUser";

const loginRouter = Router();

loginRouter.post("/", (req, res) => loginUserController.handle(req, res));

export { loginRouter };
