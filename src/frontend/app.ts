import { createServer } from "http";
import * as next from "next";
import logger from "../services/logger";

const app = next({ dev: true, dir: __dirname });
const handler = app.getRequestHandler();

async function main() {
  await app.prepare();

  createServer((req, res) => {
    handler(req, res);
  }).listen(8080, () => {
    logger.info("Next has begun serving");
  });
}

main();
