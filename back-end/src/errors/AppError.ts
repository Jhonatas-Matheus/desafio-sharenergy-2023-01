import { Request, Response, NextFunction } from "express";
import { MongoServerError } from "mongodb";

class AppError extends Error {
  constructor(public message: string, public statusCode = 400) {
    super();
  }
}
const errorHandle = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  console.log(err);
  return res.status(500).json({ message: "Internal server error." });
};
export { errorHandle, AppError };
