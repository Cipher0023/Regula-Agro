import { regPht } from "../../services/photos/regPhtSrv.js";
import prisma from "../../prisma/prismaClient.js";

export const regPhtCnt = async (req, res) => {
  try {
    const { source, description, creator_id } = req.body;
    // Enviando dados para o service
    const newRegister = await regPht(source, description, creator_id);
    console.log(newRegister);
    return res.status(201).json(newRegister);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
