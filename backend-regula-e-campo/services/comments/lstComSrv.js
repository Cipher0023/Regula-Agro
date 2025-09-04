import prisma from "../../prisma/prismaClient.js";

export const lstCom = async () => {
  try {
    const result = await prisma.comments.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar comments:", error.message);
    throw new Error("Erro ao listar comments.");
  }
};
