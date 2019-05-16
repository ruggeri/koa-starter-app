import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as nextjs from "next";
import "reflect-metadata";
import { createConnection } from "typeorm";
import rootRouter from "./routes";
import logger from "./services/logger";

async function main() {
  // Initialize typeorm database connection.
  await createConnection();

  // Setup Next.js.
  const nextApp = nextjs({ dev: true, dir: `${__dirname}/frontend` });
  const handler = nextApp.getRequestHandler();
  await nextApp.prepare();

  // Initialize Koa application.
  const koaApp = new Koa();
  koaApp.use(bodyParser());
  koaApp.use(async (ctx: Koa.Context, next) => {
    const requestJSON = ctx.request.toJSON();
    requestJSON.body = ctx.request.body;
    logger.info(requestJSON);

    await next();

    const responseJSON = ctx.response.toJSON();
    responseJSON.body = ctx.response.body;
    logger.info(responseJSON);
  });
  koaApp.use(rootRouter.routes());

  // Let nextjs handle any route that doesn't match the API.
  koaApp.use(async (ctx) => {
    await handler(ctx.req, ctx.res);
    ctx.respond = false;
  });

  // Begin serving application.
  koaApp.listen(3000);

  logger.info("Server running on port 3000!");
}

main();
