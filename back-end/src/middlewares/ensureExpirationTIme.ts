import dayjs from "dayjs";
import { NextFunction, Request, Response } from "express";
import { decode, JwtPayload } from "jsonwebtoken";

const verifyTokenExpire = (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization?.split(" ")[1];
  const tokenDecoded = decode(authToken as string) as JwtPayload;
  //   const dateCauculated = dayjs().
  //   const tokenExpired = dayjs().isAfter();
  return next();
};

export { verifyTokenExpire };
