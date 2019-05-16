import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import "reflect-metadata";
import { createConnection } from "typeorm";
import logger from "../services/logger";
import rootRouter from "./routes";

async function main() {
  // Initialize typeorm database connection.
  await createConnection();

  // Initialize Koa application.
  const app = new Koa();
  app.use(bodyParser());
  app.use(async (ctx: Koa.Context, next) => {
    const requestJSON = ctx.request.toJSON();
    requestJSON.body = ctx.request.body;
    logger.info(requestJSON);

    await next();

    const responseJSON = ctx.response.toJSON();
    responseJSON.body = ctx.response.body;
    logger.info(responseJSON);
  });
  app.use(rootRouter.routes());

  // Begin serving application.
  app.listen(3000);

  logger.info("Server running on port 3000!");
}

main();
