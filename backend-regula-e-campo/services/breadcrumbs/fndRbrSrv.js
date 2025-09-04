import prisma from "../../prisma/prismaClient.js";

export const fndRbr = async (breadcrumbs_id) => {
  return await prisma.breadcrumbs.findUnique({
    where: { breadcrumbs_id },
  });
};
