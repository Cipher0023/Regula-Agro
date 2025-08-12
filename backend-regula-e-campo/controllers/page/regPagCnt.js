import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regPag } from "../../services/page/regPagSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regPagCnt = async (req, res) => {
  try {
    const {
      dev_id,
    } = req.body;
    // Enviando dados para o service
    const newpage = await regPag(
      dev_id,
    );
    console.log(newpage);
    return res.status(201).json(newpage);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
