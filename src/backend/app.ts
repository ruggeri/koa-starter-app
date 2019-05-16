import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import "reflect-metadata";
import { createConnection } from "typeorm";
import rootRouter from "./routes";
import logger from "./services/logger";

async function main(): Promise<void> {
  // Initialize typeorm database connection.
  await createConnection();

  // Initialize Koa application.
  const koaApp = new Koa();
  koaApp.use(bodyParser());
  koaApp.use(async (ctx: Koa.Context, next): Promise<void> => {
    const requestJSON = ctx.request.toJSON();
    requestJSON.body = ctx.request.body;
    logger.info(requestJSON);

    await next();

    const responseJSON = ctx.response.toJSON();
    responseJSON.body = ctx.response.body;
    logger.info(responseJSON);
  });
  koaApp.use(rootRouter.routes());

  // Begin serving application.
  koaApp.listen(3000);

  logger.info("Server running on port 3000!");
}

main();
