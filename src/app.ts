import express, { Request, Response, Application } from "express";
import compression from "compression";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes";

const app: Application = express();
app.use(compression());
app.use("/", router);

app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb", type: "application/vnd.api+json" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

export default app;
