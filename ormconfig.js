module.exports = {
  "type": "postgres",
  "database": "koa_starter_app",
  "synchronize": false,
  "logging": true,
  "entities": [
    "dist/models/**/*.js"
  ],
  "migrations": [
    "dist/migrations/**/*.js"
  ],
  "cli": {
    "entitiesDir": "src/models",
    "migrationsDir": "src/migrations"
  }
};
