import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import compression from "compression";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./configs/config";
//For env File
dotenv.config();

const app: Application = express();
app.use(compression());
const port = process.env.PORT || 3333;

app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb", type: "application/vnd.api+json" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

const server = app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

server.keepAliveTimeout = (config.KEEP_ALIVE_TIMEOUT + 2) * 1000;
server.headersTimeout = (config.KEEP_ALIVE_TIMEOUT + 5) * 1000;

server.setTimeout(config.KEEP_ALIVE_TIMEOUT);
