import prisma from "../../prisma/prismaClient.js";


export const fndDct = async (document_type_id) => {
  const existingDocType = await prisma.document_type.findUnique({
    where: { document_type_id },
  });
  if (!existingDocType) {
    throw new Error("Tipo de documento não encontrado");
  }

  return existingDocType;
};
