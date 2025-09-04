import prisma from "../../prisma/prismaClient.js";

export const fndCom = async (comments_id) => {
  return await prisma.comments.findUnique({
    where: { comments_id },
  });
};
