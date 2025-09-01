import prisma from "../../prisma/prismaClient.js";


export const fndPag = async (page_id) => {
  return await prisma.page.findUnique({
    where: { page_id },
  });
};
