import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const chkDev = async (dev_id) => {
  if (!dev_id) return false;

  const developer = await prisma.developer.findUnique({
    where: { dev_id },
    select: { dev_id: true }, // pega só o id para leveza
  });

  return !!developer; // true se achou, false se não
};
