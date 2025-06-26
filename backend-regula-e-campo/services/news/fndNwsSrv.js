import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndNws = async (news_id) => {
  return await prisma.news.findUnique({
    where: { news_id },
  });
};
