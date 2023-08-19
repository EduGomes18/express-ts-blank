import app from "./app";
import dotenv from "dotenv";
//For env File
dotenv.config();

import config from "./configs/config";
const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

server.keepAliveTimeout = (config.KEEP_ALIVE_TIMEOUT + 2) * 1000;
server.headersTimeout = (config.KEEP_ALIVE_TIMEOUT + 5) * 1000;

server.setTimeout(config.KEEP_ALIVE_TIMEOUT);
