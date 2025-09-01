import prisma from "../../prisma/prismaClient.js";

export const delRdr = async (reader_id) => {
  try {
    await prisma.reader.delete({
      where: { reader_id },
    });
    return { success: true, message: "reader Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar reader", error.message);
    return { success: false, message: "Erro ao deletar reader" };
  }
};
