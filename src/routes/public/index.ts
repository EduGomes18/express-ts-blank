import { Router, Request, Response } from "express";
import configs from "../../configs/config";
const STATUS = configs.STATUS;

const publicRouter = Router();

publicRouter.get("/webcheck", (req: Request, res: Response) => {
  const message = "This webapi is safe";
  res.status(STATUS.success).send(message);
});

export default publicRouter;
