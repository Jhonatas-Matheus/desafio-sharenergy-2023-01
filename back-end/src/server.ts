import "dotenv/config";
import mongoose from "mongoose";

import { app } from "./app";

mongoose.set("strictQuery", true);

const main = async (): Promise<typeof mongoose> => {
  return mongoose.connect(
    `mongodb+srv://jmdevbr:${process.env.PASSWORD_MONGODB_ATLAS}@shareenergyjhonatasmtes.wct5ksl.mongodb.net/?retryWrites=true&w=majority&ssl=true`
  );
};
try {
  main();
  app.listen(2580, () => console.log("Aplicação rodando na porta 2580"));
  console.log("Database conectado com sucesso");
} catch (error) {
  console.log(error);
}
