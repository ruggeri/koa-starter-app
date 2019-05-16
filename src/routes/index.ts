import { Context } from "koa";
import * as Router from "koa-router";
import catsRouter from "./cats";

const rootRouter = new Router();

rootRouter.use("/api/cats", catsRouter.routes());

export default rootRouter;
