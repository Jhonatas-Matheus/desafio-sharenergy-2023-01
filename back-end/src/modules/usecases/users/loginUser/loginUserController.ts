import { Request, Response } from "express";

import { LoginUserUseCase } from "./loginUserUseCase";

class LoginUserController {
  constructor(private useCase: LoginUserUseCase) {}
  async handle(req: Request, res: Response) {
    const data = await this.useCase.execute(req.body);
    return res.status(200).json(data);
  }
}
export { LoginUserController };
