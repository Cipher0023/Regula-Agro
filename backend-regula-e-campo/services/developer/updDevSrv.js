import bcrypt from "bcrypt"; // For password hashing
import prisma from "../../prisma/prismaClient.js";
import { fndDev } from "../developer/fndDevSrv.js";


export const updDev = async (dev_id, updateData) => {
  try {
    const allowedFields = ["name", "email", "password"];
    const updateFields = {};

    // Loop through allowed fields and pick those provided
    for (const field of allowedFields) {
      if (updateData[field] !== undefined && updateData[field] !== "") {
        updateFields[field] = updateData[field];
      }
    }

    // Hash password if updating
    if (updateFields.password) {
      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(updateFields.password, salt);
    }

    // Verify user exists if updating user_id
    if (updateFields.dev_id) {
      const userExists = await fndUst(updateFields.dev_id);
      if (!userExists) {
        throw new Error("developer não encontrado");
      }
    }
    // Ensure at least one field to update
    if (Object.keys(updateFields).length === 0) {
      throw new Error("Nenhum dado para atualizar");
    }
    // Perform update
    const updatedUser = await prisma.developer.update({
      where: { dev_id },
      data: updateFields,
    });

    return {
      message: "Atualizado com sucesso",
      newData: updatedUser,
    };
  } catch (err) {
    console.error("Erro no serviço de update user", err);
    throw err;
  }
};
