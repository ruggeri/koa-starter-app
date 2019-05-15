import { Context } from "koa";
import * as Router from "koa-router";
import { Cat } from "../models/cat";

const catsRouter = new Router();

catsRouter.get("/", async (ctx: Context) => {
  const cats = await Cat.find();
  ctx.body = cats;
});

catsRouter.get("/:id", async (ctx: Context) => {
  const cat = await Cat.findOne({ id: ctx.params.id });
  if (cat) {
    ctx.body = cat;
  } else {
    ctx.status = 404;
  }
});

export default catsRouter;
