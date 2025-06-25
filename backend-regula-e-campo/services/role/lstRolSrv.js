import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const lstRol = async () => {
  try {
    const result = await prisma.role.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
