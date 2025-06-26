import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const lstTgt = async () => {
  try {
    const tag_types = await prisma.tag_types.findMany();
    return tag_types;
  } catch (error) {
    console.error("Erro ao listar DocTypes:", error.message);
    throw new Error("Erro ao listar DocTypes.");
  }
};
