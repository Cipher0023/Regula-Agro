import { fndLik } from "../../services/likes/fndLikSrv.js";

export const fndLikCnt = async (req, res) => {
  try {
    const { likes_id } = req.query;
    if (!likes_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndLik(likes_id);
    if (!result) {
      return res.status(404).json({ message: "likes não encontrade." });
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
