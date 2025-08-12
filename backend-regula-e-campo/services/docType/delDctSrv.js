import prisma from "../../prisma/prismaClient.js";


export const delDct = async (document_type_id) => {
  try {
    await prisma.document_type.delete({
      where: { document_type_id },
    });
    return { success: true, message: "Doctype deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar DocType:", error.message);
    return { success: false, message: "Erro ao deletar DocType." };
  }
};
