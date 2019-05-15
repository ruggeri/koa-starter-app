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

catsRouter.post("/", async (ctx: Context) => {
  const catParams = ctx.request.body;
  const cat = Cat.create({
    age: catParams.age,
    firstName: catParams.firstName,
    lastName: catParams.lastName,
  });

  await cat.save();
  ctx.body = cat;
});

export default catsRouter;
