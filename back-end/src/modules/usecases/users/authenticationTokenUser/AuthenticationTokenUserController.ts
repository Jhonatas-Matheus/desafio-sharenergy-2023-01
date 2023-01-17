import { Request, Response } from "express";

import { AuthenticationTokenUserUseCase } from "./AuthenticationTokenUserUseCase";

class AuthenticationTokenUserController {
  constructor(private useCase: AuthenticationTokenUserUseCase) {}
  async handle(req: Request, res: Response) {
    const data = await this.useCase.execute(req.body.token);
    res.status(200).json(data);
  }
}
export { AuthenticationTokenUserController };
