import prisma from "../../prisma/primaClient.js";

export const lstExm = async () => {
  try {
    const result = await prisma.example.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar example:", error.message);
    throw new Error("Erro ao listar example.");
  }
};
