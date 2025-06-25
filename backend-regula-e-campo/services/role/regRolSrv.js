import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const regRol = async (name, dev_id, permissions) => {
  const existing = await prisma.role.findFirst({
    where: {
      name: name,
    },
  });
  if (existing) {
    throw new Error("Já cadastrado");
  }

  // Criando novo registro
  const newRecord = await prisma.role.create({
    data: {
      name: name,
      dev_id: dev_id,
      permissions: permissions,
    },
  });
  if (!newRecord) {
    throw new Error("Erro ao criar registro");
  }
  return newRecord;
};
