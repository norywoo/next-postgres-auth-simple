import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// Prisma 7 no longer takes the connection URL from the schema, the client
// connects through a driver adapter instead. POSTGRES_PRISMA_URL is the
// pooled URL; CLI commands use the direct one via prisma.config.ts.
const adapter = new PrismaPg({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

const prisma = global.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
