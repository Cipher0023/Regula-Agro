import bcrypt from "bcrypt"; // For password hashing
import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { fndCre } from "../creator/fndCreSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const updCre = async (creator_id, updateData) => {
  try {
    const allowedFields = [
      "name",
      "email",
      "password",
      "document_type",
      "document_number",
      "user_id",
    ];
    const updateFields = {};

    // Loop through allowed fields and pick those provided
    for (const field of allowedFields) {
      if (updateData[field] !== undefined && updateData[field] !== "") {
        if (field === "document_type") {
          // map relation field
          updateFields.document = updateData[field];
        } else {
          updateFields[field] = updateData[field];
        }
      }
    }

    // Hash password if updating
    if (updateFields.password) {
      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(updateFields.password, salt);
    }

    // Verify user exists if updating user_id
    if (updateFields.creator_id) {
      const userExists = await fndCre(updateFields.creator_id);
      if (!userExists) {
        throw new Error("user não encontrado");
      }
    }

    // Verify document type exists if updating
    if (updateFields.document) {
      const docType = await prisma.document_type.findUnique({
        where: { document_type_id: updateFields.document },
        select: { document_type_id: true },
      });
      if (!docType) {
        throw new Error("Tipo de documento não encontrado");
      }
    }

    // Ensure at least one field to update
    if (Object.keys(updateFields).length === 0) {
      throw new Error("Nenhum dado para atualizar");
    }

    // Perform update
    const updatedCreator = await prisma.creator.update({
      where: { creator_id },
      data: updateFields,
    });

    return {
      message: "Atualizado com sucesso",
      newData: updatedCreator,
    };
  } catch (err) {
    console.error("Erro no serviço de update user", err);
    throw err;
  }
};
