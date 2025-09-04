import { delLik } from "../../services/likes/delLikSrv.js";
import { fndLik } from "../../services/likes/fndLikSrv.js";

export const delLikCnt = async (req, res) => {
  const { likes_id } = req.body;
  try {
    if (!likes_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndLik(likes_id);
    if (!existing) {
      return res.status(404).json({ message: "likes não encontrade." });
    }
    const result = await delLik(likes_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
