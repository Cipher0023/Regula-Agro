import { fndCom } from "../../services/comments/fndComSrv.js";

export const fndComCnt = async (req, res) => {
  try {
    const { comments_id } = req.query;
    if (!comments_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndCom(comments_id);
    if (!result) {
      return res.status(404).json({ message: "comments não encontrade." });
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
