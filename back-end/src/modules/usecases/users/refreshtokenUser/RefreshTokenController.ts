import { Request, Response } from "express";

import { RefreshTokenUserUseCase } from "./RefreshTokenUseCase";

class RefreshTokenUserController {
  constructor(private useCase: RefreshTokenUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { refresh_token_id } = req.body;
    const data = await this.useCase.execute(refresh_token_id);
    res.status(200).json(data);
  }
}
export { RefreshTokenUserController };
