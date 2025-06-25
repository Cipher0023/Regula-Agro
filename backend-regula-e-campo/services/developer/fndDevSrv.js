import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndDev = async (dev_id) => {
  return await prisma.developer.findUnique({
    where: { dev_id },
  });
};
