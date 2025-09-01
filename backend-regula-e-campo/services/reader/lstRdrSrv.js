import prisma from "../../prisma/prismaClient.js";

export const lstRdr = async () => {
  try {
    const result = await prisma.reader.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar reader:", error.message);
    throw new Error("Erro ao listar reader.");
  }
};
