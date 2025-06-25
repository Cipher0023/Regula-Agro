import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regRol } from "../../services/role/regRolSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regRolCnt = async (req, res) => {
  try {
    const { name, dev_id, permissions } = req.body;
    //validação dos campos obrigatórios
    if (!name || !dev_id || !permissions) {
      return res
        .status(400)
        .json({ message: "Preencha todos os campos obrigatórios" });
    }
    // Criar novo registro
    const newRegister = await regRol(name, dev_id, permissions);
    return res.status(201).json(newRegister);
  } catch (err) {
    console.error("erro ao registrar", err.message);
    return res.status(500).json({ message: err.message });
  }
  //
};
