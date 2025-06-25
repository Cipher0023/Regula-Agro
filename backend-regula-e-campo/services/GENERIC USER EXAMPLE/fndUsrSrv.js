import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndUsr = async (user_id) => {
  return await prisma.user.findUnique({
    where: { user_id },
  });
};
