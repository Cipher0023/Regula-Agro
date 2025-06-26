import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndTgt = async (tag_id) => {
  const existing = await prisma.tag_types.findUnique({
    where: { tag_id },
  });
  if (!existing) {
    throw new Error("Tipo de documento não encontrado");
  }

  return existing;
};
