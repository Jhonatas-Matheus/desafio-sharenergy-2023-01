import { Request, Response } from "express";

import { RefreshTokenUserUseCase } from "./RefreshTokenUseCase";

class RefreshTokenUserController {
  constructor(private useCase: RefreshTokenUserUseCase) {}
  async handle(req: Request, res: Response) {
    const data = await this.useCase.execute(req.body);
    res.status(200).json(data);
  }
}
export { RefreshTokenUserController };
