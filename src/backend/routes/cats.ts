import { Context } from "koa";
import * as Router from "koa-router";
import { getManager } from "typeorm";
import { Cat } from "../models/cat";
import { Friendship } from "../models/friendship";

const catsRouter = new Router();

catsRouter.get(
  "/",
  async (ctx: Context): Promise<void> => {
    const cats = await Cat.find();
    ctx.body = cats;
  },
);

catsRouter.get(
  "/:id",
  async (ctx: Context): Promise<void> => {
    const cat = await Cat.findOne(ctx.params.id, {
      relations: ["friends"],
    });

    if (cat) {
      ctx.body = cat;
    } else {
      ctx.status = 404;
    }
  },
);

catsRouter.post(
  "/",
  async (ctx: Context): Promise<void> => {
    const catParams = ctx.request.body;
    const cat = Cat.create({
      age: catParams.age,
      firstName: catParams.firstName,
      lastName: catParams.lastName,
    });

    await cat.save();
    ctx.body = cat;
  },
);

catsRouter.post(
  "/:id/friendships",
  async (ctx: Context): Promise<void> => {
    const friendship1 = Friendship.create({
      friendId1: ctx.params.id,
      friendId2: ctx.request.body.friendId,
    });

    const friendship2 = Friendship.create({
      friendId1: ctx.request.body.friendId,
      friendId2: ctx.params.id,
    });

    await getManager().transaction(
      async (manager): Promise<void> => {
        await manager.save(friendship1);
        await manager.save(friendship2);
      },
    );

    ctx.body = [friendship1, friendship2];
  },
);

export default catsRouter;
