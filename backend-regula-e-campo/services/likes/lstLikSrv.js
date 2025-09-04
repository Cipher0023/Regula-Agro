import prisma from "../../prisma/prismaClient.js";

export const lstLik = async () => {
  try {
    const result = await prisma.likes.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar likes:", error.message);
    throw new Error("Erro ao listar likes.");
  }
};
