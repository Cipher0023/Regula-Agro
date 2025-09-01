import prisma from "../../prisma/prismaClient.js";


export const delCre = async (creator_id) => {
  try {
    const existing = await prisma.creator.findUnique({
      where: { creator_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.creator.delete({
      where: { creator_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
