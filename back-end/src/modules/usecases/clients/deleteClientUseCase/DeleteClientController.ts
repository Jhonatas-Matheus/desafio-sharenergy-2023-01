import { Request, Response } from "express";

import { DeleteClientUseCase } from "./DeleteClientUseCase";

class DeleteClientController {
  constructor(private useCase: DeleteClientUseCase) {}
  async handle(req: Request, res: Response) {
    await this.useCase.execute(req.params.id);
    return res.status(204).send();
  }
}

export { DeleteClientController };
