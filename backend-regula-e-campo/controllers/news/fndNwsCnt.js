import { fndNws } from "../../services/news/fndNwsSrv.js";

export const fndNwsCnt = async (req, res) => {
  try {
    const { news_id } = req.query;
    if (!news_id) {
      return res.status(400).json({ message: "Id é obrigatório." });
    }
    const result = await fndNws(news_id);
    if (!result) {
      return res.status(404).json({ message: "Não encontrada." });
    }

    return res.status(200).json({
      message: "Encontrado.",
      result,
    });
  } catch (error) {
    console.error("Erro de busca:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
