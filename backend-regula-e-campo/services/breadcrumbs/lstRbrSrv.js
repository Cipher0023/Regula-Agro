import prisma from "../../prisma/prismaClient.js";

export const lstRbr = async () => {
  try {
    const result = await prisma.breadcrumbs.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar breadcrumbs:", error.message);
    throw new Error("Erro ao listar breadcrumbs.");
  }
};
