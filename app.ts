import * as Koa from 'koa';
import rootRouter from './src/routes';

const app = new Koa();

app.use(rootRouter.routes());

app.listen(3000);

console.log("Server running on port 3000!");
