import { Context } from "koa";
import * as Router from "koa-router";
import { Cat } from "../models/cat";

const catsRouter = new Router();

catsRouter.get("/", async (ctx: Context) => {
  const cats = Cat.find();
  ctx.body = cats;
});

catsRouter.get("/:id", async (ctx: Context) => {
  ctx.body = `Show for cat #${ctx.params.id}.`;
});

export default catsRouter;
