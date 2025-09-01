import prisma from "../../prisma/prismaClient.js";


export const lstPag = async () => {
  try {
    const result = await prisma.page.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar page:", error.message);
    throw new Error("Erro ao listar page.");
  }
};
