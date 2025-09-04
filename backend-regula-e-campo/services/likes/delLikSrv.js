import prisma from "../../prisma/prismaClient.js";

export const delLik = async (likes_id) => {
  try {
    await prisma.likes.delete({
      where: { likes_id },
    });
    return { success: true, message: "likes Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar likes", error.message);
    return { success: false, message: "Erro ao deletar likes" };
  }
};
