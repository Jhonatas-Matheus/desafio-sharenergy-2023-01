import Router, { Request, Response } from "express";

const testRouter = Router();

testRouter.get("/", (req: Request, res: Response) =>
  res.status(200).json([
    { player: "Jhonatas", elo: "Platina" },
    { player: "Matheus", elo: "Ouro" },
    { player: "Oliveira", elo: "Ferro" },
  ])
);

export { testRouter };
