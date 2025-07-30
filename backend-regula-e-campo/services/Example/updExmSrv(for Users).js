import bcrypt from "bcrypt"; // For password hashing
import prisma from "../../prisma/primaClient.js";

export const updCsm = async (example_id, updateData) => {
  try {
    const allowedFields = [
      "key",
      "password",
      "data1",
      "data2",
      "data3",
      "data4",
      "data5",
      "data6",
      "dataLink",
    ];
    const updateFields = {};

    // popula updateFields com a updateData
    for (const field of allowedFields) {
      if (updateData[field] !== undefined && updateData[field] !== "") {
        updateFields[field] = updateData[field];
      }
    }
    // verifica se pelo menos um dado vai ser atualizado
    if (Object.keys(updateFields).length === 0) {
      throw new Error("Nenhum dado para atualizar");
    }
    //encripta a nova senha
    if (updateFields.password) {
      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(updateFields.password, salt);
    }
    // realiza o update tendo como base no updateFields
    const update = await prisma.example.update({
      where: { example_id },
      data: updateFields,
    });
    return {
      message: "Atualizado com sucesso",
      newData: update,
    };
  } catch (err) {
    console.error("Erro ao atualizar Exemplo", err);
    throw err;
  }
};
