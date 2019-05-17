import * as joi from "@hapi/joi";
import * as Koa from "koa";
import * as Router from "koa-router";
import * as _ from "lodash";
import * as typeorm from "typeorm";
import { Cat } from "../models/cat";
import { Friendship } from "../models/friendship";

const catsRouter = new Router();

catsRouter.get(
  "/",
  async (ctx: Koa.Context): Promise<void> => {
    const cats = await Cat.find();
    ctx.body = cats;
  },
);

const catsShowParamsSchema = joi.object().keys({
  id: joi.number().required(),
});

catsRouter.get(
  "/:id",
  async (ctx: Koa.Context): Promise<void> => {
    const { value: params, error } = joi.validate(
      { id: ctx.params.id },
      catsShowParamsSchema,
    );

    if (error) {
      ctx.body = error.message;
      ctx.status = 400;
      return;
    }

    const cat = await Cat.findOne(params, {
      relations: ["friends"],
    });

    if (cat) {
      ctx.body = cat;
    } else {
      ctx.status = 404;
    }
  },
);

const catsCreateParamsSchema = joi.object().keys({
  age: joi
    .number()
    .required()
    .strict(),
  firstName: joi
    .string()
    .required()
    .strict(),
  lastName: joi
    .string()
    .required()
    .strict(),
});

catsRouter.post(
  "/",
  async (ctx: Koa.Context): Promise<void> => {
    const { value: catParams, error } = joi.validate(
      _.pick(ctx.request.body, ["age", "firstName", "lastName"]),
      catsCreateParamsSchema,
    );

    if (error) {
      ctx.body = error.message;
      ctx.status = 422;
      return;
    }

    const cat = Cat.create({
      age: catParams.age,
      firstName: catParams.firstName,
      lastName: catParams.lastName,
    });

    await cat.save();
    ctx.body = cat;
  },
);

const catsFriendshipCreateParamsSchema = joi.object().keys({
  id: joi.number().required(),
  friendId: joi.number().required(),
});

catsRouter.post(
  "/:id/friendships",
  async (ctx: Koa.Context): Promise<void> => {
    const { value: friendshipParams, error } = joi.validate(
      { id: ctx.params.id, friendId: ctx.request.body.friendId },
      catsFriendshipCreateParamsSchema,
    );

    if (error) {
      ctx.body = error.message;
      ctx.status = 422;
      return;
    }

    const friendship1 = Friendship.create({
      friendId1: friendshipParams.id,
      friendId2: friendshipParams.friendId,
    });

    const friendship2 = Friendship.create({
      friendId1: friendshipParams.friendId,
      friendId2: friendshipParams.id,
    });

    await typeorm.getManager().transaction(
      async (manager): Promise<void> => {
        await manager.save(friendship1);
        await manager.save(friendship2);
      },
    );

    ctx.body = [friendship1, friendship2];
  },
);

export default catsRouter;
