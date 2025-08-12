import prisma from "../../prisma/prismaClient.js";


export const regNws = async (title, text, creator_id, tag) => {
  const existing = await prisma.news.findFirst({
    where: {
      title: title,
    },
  });
  if (existing) {
    throw new Error("Já cadastrado");
  }

  // Criando novo registro
  const newRecord = await prisma.news.create({
    data: {
      title: title,
      text: text,
      creator_id: creator_id,
      tag: tag,
    },
  });
  if (!newRecord) {
    throw new Error("Erro ao criar registro");
  }
  return newRecord;
};
