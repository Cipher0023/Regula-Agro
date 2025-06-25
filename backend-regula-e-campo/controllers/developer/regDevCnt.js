import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regDev } from "../../services/developer/regDevSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regDevCnt = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Dados recebidos:", req.body);
    // Criar novo usuário
    const newUser = await regDev(name, email, password);
    console.log(newUser);
    return res.status(201).json(newUser);
  } catch (err) {
    console.error("Erro ao registrar usuário:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
