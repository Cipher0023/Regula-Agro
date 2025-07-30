import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regExm } from "../../services/Example/regExmSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regExmCnt = async (req, res) => {
  try {
    const {
      key,
      data1,
      data2,
      data3,
      data4,
      dataInt,
      dataFloat,
      dataBoolean,
      dataDate,
      dataLink,
    } = req.body;
    // Enviando dados para o service
    const newExample = await regExm(
      key,
      data1,
      data2,
      data3,
      data4,
      dataInt,
      dataFloat,
      dataBoolean,
      dataDate,
      dataLink
    );
    console.log(newExample);
    return res.status(201).json(newExample);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
