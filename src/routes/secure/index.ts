import { Router } from "express";
import userRouter from "./users";

const secureRouter = Router();

secureRouter.use("/users", userRouter);

export default secureRouter;
