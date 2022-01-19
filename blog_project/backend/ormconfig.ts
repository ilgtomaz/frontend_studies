import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: "sqlite",
  database: "./dist/src/database/db.sqlite",
  entities: ["dist/src/entities/**/*.js"],
  migrations: ["dist/src/migrations/**/*.js"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
  },
};

export = config;