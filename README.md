* Installed `yarn global add typescript`.
* Installed `yarn global add concurrently`.
* Installed `yarn global add nodemon`.

* `yarn run watch:ts` recompiles `.ts` files and writes to `./dist/`.
* `yarn run serve` uses `nodemon` to watch `./dist/` and run
  `./dist/app.js`.
* `yarn start:dev` runs both concurrently.

* Using `koa` (next generation of Express).

* Setup `typeorm` and migrations.
* Setup `tslint` (still must run `yarn run tslint --fix`)...
  * But can install `tslint` for VSCode so that this auto highlights...
