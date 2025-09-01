import prisma from "../../prisma/prismaClient.js";


export const fndNws = async (news_id) => {
  return await prisma.news.findUnique({
    where: { news_id },
  });
};
