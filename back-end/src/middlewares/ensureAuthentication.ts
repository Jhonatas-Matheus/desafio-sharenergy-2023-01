import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

const tokenVerify = (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization?.split(" ")[1];
  if (!authToken) {
    throw new Error("Token is missing.");
  }
  try {
    verify(authToken, process.env.SECRET_KEY as string);
    return next();
  } catch (error) {
    throw new Error(error as string);
  }
};

export { tokenVerify };
