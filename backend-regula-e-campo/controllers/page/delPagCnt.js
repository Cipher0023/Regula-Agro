import { delPag } from "../../services/page/delPagSrv.js";
import { fndPag } from "../../services/page/fndPagSrv.js";

export const delPagCnt = async (req, res) => {
  const { page_id } = req.body;
  try {
    if (!page_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndPag(page_id);
    if (!existing) {
      return res.status(404).json({ message: "page não encontrade." });
    }
    const result = await delPag(page_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
