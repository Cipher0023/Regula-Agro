
import { regLik } from "../../services/likes/regLikSrv.js";

export const regLikCnt = async (req, res) => {
  try {
    const {
      reader_id,
      news_id,
  
    } = req.body;
    // Enviando dados para o service
    const newlikes = await regLik(
      reader_id,
      news_id
    );
    console.log(newlikes);
    return res.status(201).json(newlikes);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
