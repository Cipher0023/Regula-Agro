import prisma from "../../prisma/prismaClient.js";

export const fndLik = async (likes_id) => {
  return await prisma.likes.findUnique({
    where: { likes_id },
  });
};
