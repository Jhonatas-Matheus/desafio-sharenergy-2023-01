import { Request, Response } from "express";

import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
  constructor(private useCase: CreateClientUseCase) {}
  async handle(req: Request, res: Response) {
    const data = await this.useCase.execute(req.body);
    return res.status(201).json(data);
  }
}
export { CreateClientController };
