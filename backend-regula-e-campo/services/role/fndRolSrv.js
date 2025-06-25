import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndRol = async (role_id) => {
  return await prisma.role.findUnique({
    where: { role_id },
  });
};
