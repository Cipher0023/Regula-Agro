import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regUsr } from "../../services/User/regUsrSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regUsrCnt = async (req, res) => {
  try {
    const {
      name,
      email,
      telephone,
      password,
      document_type,
      document_number,
      role_id,
      salary,
    } = req.body;
    console.log("Dados recebidos:", req.body);

    // Criar novo usuário
    const newUser = await regUsr(
      name,
      email,
      telephone,
      password,
      document_type,
      document_number,
      role_id,
      salary
    );
    console.log(newUser);
    return res.status(201).json(newUser);
  } catch (err) {
    console.error("Erro ao registrar usuário:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
