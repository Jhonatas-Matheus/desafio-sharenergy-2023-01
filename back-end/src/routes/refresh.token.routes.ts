import Router from "express";

import { tokenVerify } from "../middlewares/ensureAuthentication";
import { refreshTokenUserController } from "../modules/usecases/users/trueRefreshtokenUser";

const refreshRouter = Router();
// refreshRouter.use(tokenVerify);
refreshRouter.get("/", (req, res) =>
  refreshTokenUserController.handle(req, res)
);

export { refreshRouter };
