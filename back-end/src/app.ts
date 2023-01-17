import "express-async-errors";
import cors from "cors";
import express from "express";

import { errorHandle } from "./errors/AppError";
import { tokenVerify } from "./middlewares/ensureAuthentication";
import { clientsRouter } from "./routes/clients.routes";
import { refreshRouter } from "./routes/refresh.token.routes";
import { tokenRouter } from "./routes/token.routes";
import { loginRouter } from "./routes/user.login.routes";
import { registerRouter } from "./routes/user.register.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use(tokenVerify);
app.use("/client", clientsRouter);
app.use("/refresh", refreshRouter);
app.use("/token", tokenRouter);

app.use(errorHandle);
export { app };
