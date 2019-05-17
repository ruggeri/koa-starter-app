**Scripts**

* `eslint`: watches `src` and runs `eslint`.
* `serve`: uses `nodemon` to watch `dist/backend` and run
  `dist/backend/app.js`.
* `start:dev`: uses `concurrently` to run `ts:watch` and `serve`.
* `ts:watch`, `ts:watch:backend`, `ts:watch:frontend`: watches
  all/backend/frontend directories and recompiles typescript code.

**Packages**

* `koa`
  * `koa-bodyparser` and `koa-router`.
  * Use `@hapi/joi` for validations.
* `next`
  * All `next` content lives in `src/frontend`, it is served via `next`
    which is served via `koa`.
  * I compile the frontend typescript => javascript with esnext style
    imports. Then `next`'s server does the rest of the transpilation.
* `typeorm`
  * Needs `reflect-metadata`.
  * Also using their migrations support.

**Dev Packages**

* Yarn stuff:
  * `concurrently` for running simultaneous jobs.
  * `nodemon` for restarting servers.
  * `wait-on` for waiting for something to get built.
* `eslint`
  * I have a number of plugins (especially around typescript).
  * I use `prettier` for formatting.
* typescript
  * I also have `ts-node`, which could be handy sometime.

## TODO

* I want to look into GraphQL and Relay.
  * https://github.com/graphql/graphql-js
    * You make the schema, and you list the *resolvers*.
  * https://github.com/graphql/express-graphql
    * Pretty sure this just creates an endpoint to receive graphql
      queries.
    * But you must have already made the schema.
  * `https://github.com/apollographql/apollo-server`
    * https://www.apollographql.com/docs/
    * https://www.apollographql.com/docs/apollo-server/
    * https://www.apollographql.com/docs/tutorial/introduction
  * Prisma?
  * https://typegraphql.ml/
      * Integrates with TypeORM.
      * Basically: it looks like one has to do a lot of work writing
        resolvers.
      * But is it easier? I mean, you still have to write the resolver
        code, right?
  * https://github.com/graphql/dataloader
  * https://graphql-code-generator.com/
      * Here is another approach.
* Randoms
  * Testing? Jest?
  * Ramda? (I haven't needed that yet.)
  * Rxjs?
  * Authorization.
