import { fndLik } from "../../services/likes/fndLikSrv.js";
import { updLik } from "../../services/likes/updLikSrv.js";

export const updLikCnt = async (req, res) => {
  const { likes_id, updateData } = req.body;
  try {
    if (!likes_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndLik(likes_id);
    if (!existing) {
      return res.status(404).json({ message: " likes Não encontrade." });
    }
    req.body = {
      likes_id: existing.likes_id,
      ...updateData,
    };
    const result = await updLik(likes_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
