import prisma from "../../prisma/prismaClient.js";
export const delRol = async (role_id) => {
  try {
    const existing = await prisma.role.findUnique({
      where: { role_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.role.delete({
      where: { role_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
