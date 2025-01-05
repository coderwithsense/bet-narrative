import { PrismaClient } from "@prisma/client";

// Create a singleton instance of PrismaClient for global usage
const prismaGlobal = global as typeof global & { prisma?: PrismaClient };

export const prismadb = prismaGlobal.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    prismaGlobal.prisma = prismadb;
}