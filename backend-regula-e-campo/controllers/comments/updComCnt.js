import { fndCom } from "../../services/comments/fndComSrv.js";
import { updCom } from "../../services/comments/updComSrv.js";

export const updComCnt = async (req, res) => {
  const { comments_id, updateData } = req.body;
  try {
    if (!comments_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndCom(comments_id);
    if (!existing) {
      return res.status(404).json({ message: " comments Não encontrade." });
    }
    req.body = {
      comments_id: existing.comments_id,
      ...updateData,
    };
    const result = await updCom(comments_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
