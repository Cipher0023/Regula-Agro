import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndCre = async (creator_id) => {
  return await prisma.creator.findUnique({
    where: { creator_id },
  });
};
