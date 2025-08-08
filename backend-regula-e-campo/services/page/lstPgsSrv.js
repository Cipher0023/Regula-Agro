import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const lstPgs = async () => {
  try {
    const result = await prisma.page.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar page:", error.message);
    throw new Error("Erro ao listar page.");
  }
};
