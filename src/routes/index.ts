import { Router } from "express";
import secureRouter from "./secure";
import publicRouter from "./public";

const router = Router();

router.use("/", secureRouter);
router.use("/", publicRouter);

export default router;
