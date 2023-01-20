import { NextFunction, Request, Response } from "express";
import { decode, JwtPayload, verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";

interface IJwtPayloadPerson extends JwtPayload {
  userId: string;
}
interface IRequestPerson extends Request {
  userId: string;
}

const tokenVerify = (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization?.split(" ")[1];
  if (!authToken) {
    throw new AppError("Token is missing.", 401);
  }
  try {
    verify(authToken, process.env.SECRET_KEY as string);
    const tokenDecoded = decode(authToken) as JwtPayload;
    req.userId = tokenDecoded.userId;
    return next();
  } catch (error) {
    throw new AppError(error as string, 401);
  }
};

export { tokenVerify, IJwtPayloadPerson, IRequestPerson };
