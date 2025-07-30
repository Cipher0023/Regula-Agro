import prisma from "../../prisma/primaClient.js";

export const delExm = async (example_id) => {
  try {
    await prisma.example.delete({
      where: { example_id },
    });
    return { success: true, message: "Example Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Example", error.message);
    return { success: false, message: "Erro ao deletar Example" };
  }
};
