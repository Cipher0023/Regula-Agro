import prisma from "../../prisma/prismaClient.js";

export const lstRol = async () => {
  try {
    const result = await prisma.role.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
