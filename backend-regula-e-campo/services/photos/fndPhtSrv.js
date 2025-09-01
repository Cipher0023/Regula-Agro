import prisma from "../../prisma/prismaClient.js";


export const fndPht = async (photo_id) => {
  return await prisma.photos.findUnique({
    where: { photo_id },
  });
};
