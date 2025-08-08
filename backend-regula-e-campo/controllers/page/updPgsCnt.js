import { fndPgs } from "../../services/page/fndPgsSrv.js";
import { updPgs } from "../../services/page/updPgsSrv.js";

export const updPgsCnt = async (req, res) => {
  const { page_id, updateData } = req.body;
  try {
    if (!page_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndPgs(page_id);
    if (!existing) {
      return res.status(404).json({ message: " page Não encontrade." });
    }
    req.body = {
      page_id: existing.page_id,
      ...updateData,
    };
    const result = await updPgs(page_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
