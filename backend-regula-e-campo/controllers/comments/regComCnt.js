
import { regCom } from "../../services/comments/regComSrv.js";


export const regComCnt = async (req, res) => {
  try {
    const {
      reader_id,
      news_id,
      text,
    } = req.body;
    // Enviando dados para o service
    const newcomments = await regCom(
      reader_id,
      news_id,
      text,
    );
    console.log(newcomments);
    return res.status(201).json(newcomments);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
