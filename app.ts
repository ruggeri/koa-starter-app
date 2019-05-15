import * as Koa from 'koa';
import rootRouter from './src/routes';
import { createConnection } from 'typeorm';

async function main() {
  // Initialize typeorm database connection.
  await createConnection();

  // Initialize Koa application.
  const app = new Koa();
  app.use(rootRouter.routes());

  // Begin serving application.
  app.listen(3000);

  console.log("Server running on port 3000!");
}

main();
