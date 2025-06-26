import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const delTgt = async (tag_id) => {
  try {
    await prisma.tag_types.delete({
      where: { tag_id },
    });
    return { success: true, message: "tag deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar tag:", error.message);
    return { success: false, message: "Erro ao deletar tag." };
  }
};
