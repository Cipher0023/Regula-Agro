import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const regTgt = async (name, dev_id) => {
  const existingDocType = await prisma.tag_types.findFirst({
    where: {
      name: name,
    },
  });
  if (existingDocType) {
    throw new Error("Tipo de documento já cadastrado");
  }
  // Create new DocType
  const newDocType = await prisma.tag_types.create({
    data: {
      name: name,
      dev_id: dev_id,
    },
  });
  if (!newDocType) {
    throw new Error("Erro ao criar o tipo de documento");
  }
  return newDocType;
};
