import "express-async-errors";
import express from "express";

import { errorHandle } from "./errors/AppError";
import { refreshRouter } from "./routes/refresh.token.routes";
import { loginRouter } from "./routes/user.login.routes";
import { registerRouter } from "./routes/user.register.routes";

const app = express();

app.use(express.json());

app.use("/register", registerRouter);
app.use("/login", loginRouter);
// app.use("/refresh", refreshRouter);

app.use(errorHandle);
export { app };
