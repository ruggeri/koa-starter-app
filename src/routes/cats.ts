import { Context } from 'koa';
import * as Router from 'koa-router';

const catsRouter = new Router();

catsRouter.get("/", async (ctx: Context) => {
  ctx.body = "Index for all the cats.";
});

catsRouter.get('/:id', async (ctx: Context) => {
  ctx.body = `Show for cat #${ctx.params.id}.`
})

export default catsRouter;
