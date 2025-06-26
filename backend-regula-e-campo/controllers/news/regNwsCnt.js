import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regNws } from "../../services/news/regNwsSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regNwsCnt = async (req, res) => {
  try {
    const { title, text, creator_id, tag } = req.body;
    //validação dos campos obrigatórios
    if (!title || !text || !creator_id || !tag) {
      return res
        .status(400)
        .json({ message: "Preencha todos os campos obrigatórios" });
    }
    // Criar novo registro
    const newRegister = await regNws(title, text, creator_id, tag);
    return res.status(201).json(newRegister);
  } catch (err) {
    console.error("erro ao registrar", err.message);
    return res.status(500).json({ message: err.message });
  }
  //
};
