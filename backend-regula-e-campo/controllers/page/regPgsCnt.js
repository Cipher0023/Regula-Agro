import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regPgs } from "../../services/page/regPgsSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regPgsCnt = async (req, res) => {
  try {
    const {
      dev_id,
    } = req.body;
    // Enviando dados para o service
    const newpage = await regPgs(
      dev_id,
    );
    console.log(newpage);
    return res.status(201).json(newpage);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
