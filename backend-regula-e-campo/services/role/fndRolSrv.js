import prisma from "../../prisma/prismaClient.js";
export const fndRol = async (role_id) => {
  return await prisma.role.findUnique({
    where: { role_id },
  });
};
