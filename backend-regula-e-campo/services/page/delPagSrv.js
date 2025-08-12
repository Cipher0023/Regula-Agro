import prisma from "../../prisma/prismaClient.js";

export const delPag = async (page_id) => {
  try {
    await prisma.page.delete({
      where: { page_id },
    });
    return { success: true, message: "page Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar page", error.message);
    return { success: false, message: "Erro ao deletar page" };
  }
};
