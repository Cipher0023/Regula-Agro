import { fndCre } from "../../services/creator/fndCreSrv.js";
import { updCre } from "../../services/creator/updCreSrv.js";

export const updCreCnt = async (req, res) => {
  const { creator_id, updateData } = req.body;
  try {
    if (!creator_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndCre(creator_id);
    if (!existing) {
      return res.status(404).json({ message: "Não encontrado." });
    }
    req.body = {
      creator_id: existing.creator_id,
      ...updateData,
    };
    const result = await updCre(existing.creator_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
