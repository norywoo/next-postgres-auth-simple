import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  // CLI commands (db push, migrate, introspect) bypass the connection pooler
  // and talk to Postgres directly. The runtime client goes through the pooled
  // POSTGRES_PRISMA_URL, see the driver adapter in lib/prisma.ts.
  datasource: {
    url: env("POSTGRES_URL_NON_POOLING"),
    shadowDatabaseUrl: env("POSTGRES_URL_NON_POOLING"),
  },
});
