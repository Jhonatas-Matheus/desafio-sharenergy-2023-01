import { Request, Response } from "express";

import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}
  async handle(req: Request, res: Response) {
    const data = await this.useCase.execute(req.body);
    return res.status(201).json(data);
  }
}

export { CreateUserController };
