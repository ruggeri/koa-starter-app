import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as nextjs from "next";
import "reflect-metadata";
import * as typeorm from "typeorm";
import rootRouter from "./routes";
import logger from "./services/logger";

async function main(): Promise<void> {
  // Initialize typeorm database connection.
  await typeorm.createConnection();

  const nextApp = nextjs({
    dev: true,
    dir: `${__dirname}/../frontend`,
  });
  const nextHandler = nextApp.getRequestHandler();
  await nextApp.prepare();

  // Initialize Koa application.
  const koaApp = new Koa();
  koaApp.use(bodyParser());
  koaApp.use(
    async (ctx: Koa.Context, next): Promise<void> => {
      const requestJSON = ctx.request.toJSON();
      requestJSON.body = ctx.request.body;
      logger.info(requestJSON);

      await next();

      const responseJSON = ctx.response.toJSON();
      responseJSON.body = ctx.response.body;
      logger.info(responseJSON);
    },
  );

  koaApp.use(rootRouter.routes());

  koaApp.use(
    async (ctx: Koa.Context): Promise<void> => {
      await nextHandler(ctx.req, ctx.res);
      ctx.respond = false;
    },
  );

  // Begin serving application.
  koaApp.listen(3000);

  logger.info("Server running on port 3000!");
}

main();
