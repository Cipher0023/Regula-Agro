import prisma from "../../prisma/prismaClient.js";

export const delCom = async (comments_id) => {
  try {
    await prisma.comments.delete({
      where: { comments_id },
    });
    return { success: true, message: "comments Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar comments", error.message);
    return { success: false, message: "Erro ao deletar comments" };
  }
};
