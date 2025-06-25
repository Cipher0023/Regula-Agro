import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndDct = async (document_type_id) => {
  const existingDocType = await prisma.document_type.findUnique({
    where: { document_type_id },
  });
  if (!existingDocType) {
    throw new Error("Tipo de documento não encontrado");
  }

  return existingDocType;
};
