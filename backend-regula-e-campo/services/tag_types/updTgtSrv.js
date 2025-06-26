import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const updTgt = async (tag_id, updateData) => {
  try {
    const allowedFields = ["name", "dev_id"];
    const updateFields = {};
    //faz um loop nos campos permitidos e verifica quais foram enviados
    for (const field of allowedFields) {
      if (updateData[field] !== undefined && updateData[field] !== "") {
        updateFields[field] = updateData[field];
      }
    }
    //verifica se ao menos um campo válido foi enviado para update
    if (Object.keys(updateFields).length === 0) {
      throw new Error("nenhum dado para atualizar");
    }
    // Atualiza o desenvolvedor com os campos permitidos
    const updateDocType = await prisma.tag_types.update({
      where: { tag_id },
      data: updateFields,
    });
    // Retorna o desenvolvedor atualizado
    return {
      message: "Atualizado com sucesso",
      newData: updateDocType,
    };
  } catch (err) {
    console.error("Erro no serviço de update", err);
    throw err;
  }
};
