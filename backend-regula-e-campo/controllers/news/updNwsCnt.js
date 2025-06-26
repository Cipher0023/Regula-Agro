import { fndNws } from "../../services/news/fndNwsSrv.js";
import { updNws } from "../../services/news/updNwsSrv.js";

//

export const updNwsCnt = async (req, res) => {
  const { news_id, updateData } = req.body;
  try {
    if (!news_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndNws(news_id);
    if (!existing) {
      return res.status(404).json({ message: "Não encontrado." });
    }
    req.body = {
      news_id: existing.news_id,
      ...updateData,
    };
    const result = await updNws(existing.news_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
