import "express-async-error";
import express from "express";

import { loginRouter } from "./routes/user.login.routes";
import { registerRouter } from "./routes/user.register.routes";

const app = express();

app.use(express.json());

app.use("/register", registerRouter);
app.use("/login", loginRouter);
export { app };
