module.exports = {
  "type": "postgres",
  "database": "koa_starter_app",
  "synchronize": false,
  "logging": true,
  "entities": [
    "dist/backend/models/**/*.js"
  ],
  "migrations": [
    "dist/backend/migrations/**/*.js"
  ],
  "cli": {
    "entitiesDir": "src/backend/models",
    "migrationsDir": "src/backend/migrations"
  }
};
