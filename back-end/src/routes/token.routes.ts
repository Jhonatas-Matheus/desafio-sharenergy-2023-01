import Router from "express";

import { authenticationTokenUserController } from "../modules/usecases/users/authenticationTokenUser";

const tokenRouter = Router();

tokenRouter.post("/", (req, res) =>
  authenticationTokenUserController.handle(req, res)
);
export { tokenRouter };
