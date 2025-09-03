import prisma from "../../prisma/prismaClient.js";

export const regNws = async (
  title,
  text,
  subtitle,
  creator_id,
  tag,
  main_image,
  secondary_photos
) => {
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
      subtitle: subtitle,
      text: text,
      creator_id: creator_id,
      tag: tag,
      main_image: main_image,
      secondary_photos: secondary_photos,
    },
  });
  if (!newRecord) {
    throw new Error("Erro ao criar registro");
  }
  return newRecord;
};
