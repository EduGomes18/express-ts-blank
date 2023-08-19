import { Router, Request, Response } from "express";
import { getUsers } from "../../controllers/users";
import configs from "../../configs/config";
const STATUS = configs.STATUS;
const userRouter = Router();

userRouter.get("/", (req: Request, res: Response): void => {
  const users = getUsers();
  res.status(STATUS.success).send(users);
});

export default userRouter;
