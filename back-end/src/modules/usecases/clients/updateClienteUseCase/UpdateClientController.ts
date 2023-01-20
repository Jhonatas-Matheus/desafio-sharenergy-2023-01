import { Request, Response } from "express";

import { UpdateClientUseCase } from "./UpdateClientUseCase";

class UpdateClientController {
  constructor(private useCase: UpdateClientUseCase) {}
  async handle(req: Request, res: Response) {
    const data = await this.useCase.execute(req.body, req.params.id);
    return res.status(200).json(data);
  }
}
export { UpdateClientController };
