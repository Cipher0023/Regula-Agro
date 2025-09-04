import prisma from "../../prisma/prismaClient.js";

export const fndExm = async (example_id) => {
  return await prisma.example.findUnique({
    where: { example_id },
  });
};
