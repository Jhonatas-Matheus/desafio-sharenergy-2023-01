import { Request, Response } from "express";

import { GetSpecificClientUseCase } from "./GetSpecifcUserUseCase";

class GetSpecificClientController {
  constructor(private useCase: GetSpecificClientUseCase) {}
  async handle(req: Request, res: Response) {
    const data = await this.useCase.execute(req.params.id);
    return res.status(200).json(data);
  }
}

export { GetSpecificClientController };
