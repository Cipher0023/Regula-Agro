import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regTgt } from "../../services/tag_types/regTgtSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regTgtCnt = async (req, res) => {
  try {
    const { name, dev_id } = req.body;
    //validação dos campos obrigatórios
    if (!name || !dev_id) {
      return res
        .status(400)
        .json({ message: "Preencha todos os campos obrigatórios" });
    }
    // Create new DocType
    const newDoctype = await regTgt(name, dev_id);
    return res.status(201).json(newDoctype);
  } catch (err) {
    console.error("erro ao registrar tipo de documento", err.message);
    return res.status(500).json({ message: err.message });
  }
};
