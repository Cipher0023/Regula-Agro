import prisma from "../../prisma/prismaClient.js";


export const lstDct = async () => {
  try {
    const docTypes = await prisma.document_type.findMany();
    return docTypes;
  } catch (error) {
    console.error("Erro ao listar DocTypes:", error.message);
    throw new Error("Erro ao listar DocTypes.");
  }
};
