import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const lstUsr = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
