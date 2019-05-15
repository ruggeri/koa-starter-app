import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import "reflect-metadata";
import { createConnection } from "typeorm";
import rootRouter from "./src/routes";
import logger from "./src/services/logger";

async function main() {
  // Initialize typeorm database connection.
  await createConnection();

  // Initialize Koa application.
  const app = new Koa();
  app.use(bodyParser());
  app.use(async (ctx: Koa.Context, next) => {
    const logCtx = ctx.toJSON();
    logCtx.request.body = ctx.request.body;
    logger.info(logCtx);

    await next();
  });
  app.use(rootRouter.routes());

  // Begin serving application.
  app.listen(3000);

  logger.info("Server running on port 3000!");
}

main();
