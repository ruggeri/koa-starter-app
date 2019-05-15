import * as Koa from "koa";
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as winston from "winston";
import rootRouter from "./src/routes";

async function main() {
  // Initialize typeorm database connection.
  await createConnection();

  // Initialize Koa application.
  const app = new Koa();
  app.use(rootRouter.routes());

  // Begin serving application.
  app.listen(3000);

  winston.log("info", "Server running on port 3000!");
}

main();
