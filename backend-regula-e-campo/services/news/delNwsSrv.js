import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const delNws = async (news_id) => {
  try {
    const existing = await prisma.news.findUnique({
      where: { news_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.news.delete({
      where: { news_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
