import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const lstDev = async () => {
  try {
    const result = await prisma.developer.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
