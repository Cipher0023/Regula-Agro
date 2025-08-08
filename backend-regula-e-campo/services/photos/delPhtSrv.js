import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const delPht = async (photo_id) => {
  try {
    await prisma.photos.delete({
      where: { photo_id },
    });
    return { success: true, message: "photo Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar photo", error.message);
    return { success: false, message: "Erro ao deletar photo" };
  }
};
