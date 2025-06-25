import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const delUsr = async (user_id) => {
  try {
    const existing = await prisma.user.findUnique({
      where: { user_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.user.delete({
      where: { user_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
