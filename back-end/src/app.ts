import "express-async-error";
import express from "express";

import { tokenVerify } from "./middlewares/ensureAuthentication";
import { testRouter } from "./routes/test.authentication.routes";
import { loginRouter } from "./routes/user.login.routes";
import { registerRouter } from "./routes/user.register.routes";

const app = express();

app.use(express.json());

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/test", tokenVerify, testRouter);

export { app };
