import { delNws } from "../../services/news/delNwsSrv.js";

export const delNwsCnt = async (req, res) => {
  const { news_id } = req.body;
  try {
    if (!news_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const result = await delNws(news_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
