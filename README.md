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

* Review package.jsons.
* I want to look into GraphQL and Relay.
* Randoms
    * Testing? Jest?
    * Ramda? (I haven't needed that yet.)
    * Rxjs?
    * Authorization.
