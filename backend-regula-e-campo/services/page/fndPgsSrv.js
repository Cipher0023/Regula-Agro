import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndPgs = async (page_id) => {
  return await prisma.page.findUnique({
    where: { page_id },
  });
};
