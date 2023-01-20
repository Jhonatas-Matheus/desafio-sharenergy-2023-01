import Router from "express";

import { tokenVerify } from "../middlewares/ensureAuthentication";
import { refreshTokenUserController } from "../modules/usecases/users/refreshtokenUser";

const refreshRouter = Router();
refreshRouter.use(tokenVerify);
refreshRouter.post("/", (req, res) =>
  refreshTokenUserController.handle(req, res)
);

export { refreshRouter };
