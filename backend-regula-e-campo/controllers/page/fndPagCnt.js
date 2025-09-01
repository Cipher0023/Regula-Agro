import { fndPag } from "../../services/page/fndPagSrv.js";

export const fndPagCnt = async (req, res) => {
  try {
    const { page_id } = req.query;
    if (!page_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndPag(page_id);
    if (!result) {
      return res.status(404).json({ message: "page não encontrade." });
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
