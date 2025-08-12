import prisma from "../../prisma/prismaClient.js";

export const fndDev = async (dev_id) => {
  return await prisma.developer.findUnique({
    where: { dev_id },
  });
};
