import prisma from "../../prisma/prismaClient.js";


export const fndCre = async (creator_id) => {
  return await prisma.creator.findUnique({
    where: { creator_id },
  });
};
