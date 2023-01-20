import { Request, Response } from "express";

import { GetAllClientsUseCase } from "./GetAllClientsUseCase";

class GetAllClientsController {
  constructor(private useCase: GetAllClientsUseCase) {}
  async handle(req: Request, res: Response) {
    const { page } = req.query;
    const { limit } = req.query;
    const startIndex =
      (parseFloat(page as string) - 1) * parseFloat(limit as string);
    const endIndex = parseFloat(page as string) * parseFloat(limit as string);
    const data = await this.useCase.execute();
    if (page && limit) {
      return res.status(200).json(data?.slice(startIndex, endIndex));
    }
    return res.status(200).json(data);
  }
}
export { GetAllClientsController };
