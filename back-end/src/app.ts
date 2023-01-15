import express from "express";

import "express-async-error";
import { registerRouter } from "./routes/user.register.routes";

const app = express();

app.use(express.json());

app.use("/register", registerRouter);

export { app };
