import prisma from "../../prisma/prismaClient.js";

export const lstNws = async () => {
  try {
    const result = await prisma.news.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
