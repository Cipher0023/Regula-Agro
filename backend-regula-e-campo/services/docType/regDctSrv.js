import prisma from "../../prisma/prismaClient.js";


export const regDct = async (name, dev_id) => {
  const existingDocType = await prisma.document_type.findFirst({
    where: {
      name: name,
    },
  });
  if (existingDocType) {
    throw new Error("Tipo de documento já cadastrado");
  }
  // Create new DocType
  const newDocType = await prisma.document_type.create({
    data: {
      name: name,
      dev_id: dev_id,
    },
  });
  if (!newDocType) {
    throw new Error("Erro ao criar o tipo de documento");
  }
  return newDocType;
};
