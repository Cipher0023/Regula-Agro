import prisma from "../../prisma/prismaClient.js";

export const delRbr = async (breadcrumbs_id) => {
  try {
    await prisma.breadcrumbs.delete({
      where: { breadcrumbs_id },
    });
    return { success: true, message: "breadcrumbs Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar breadcrumbs", error.message);
    return { success: false, message: "Erro ao deletar breadcrumbs" };
  }
};
