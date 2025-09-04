import { delCom } from "../../services/comments/delComSrv.js";
import { fndCom } from "../../services/comments/fndComSrv.js";

export const delComCnt = async (req, res) => {
  const { comments_id } = req.body;
  try {
    if (!comments_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndCom(comments_id);
    if (!existing) {
      return res.status(404).json({ message: "comments não encontrade." });
    }
    const result = await delCom(comments_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
