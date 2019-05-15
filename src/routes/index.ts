import { Context } from 'koa';
import * as Router from 'koa-router';
import catsRouter from './cats';

const rootRouter = new Router();

rootRouter.get("/", async (ctx: Context) => {
  ctx.body = "Hello world!";
});

rootRouter.use('/cats', catsRouter.routes())

export default rootRouter;
