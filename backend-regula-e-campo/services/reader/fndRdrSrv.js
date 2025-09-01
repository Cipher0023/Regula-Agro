import prisma from "../../prisma/prismaClient.js";

export const fndRdr = async (reader_id) => {
  return await prisma.reader.findUnique({
    where: { reader_id },
  });
};
