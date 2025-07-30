import prisma from "../../prisma/primaClient.js";

export const fndExm = async (example_id) => {
  return await prisma.example.findUnique({
    where: { example_id },
  });
};
