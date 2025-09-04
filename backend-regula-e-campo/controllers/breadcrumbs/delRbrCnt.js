import { delRbr } from "../../services/breadcrumbs/delRbrSrv.js";
import { fndRbr } from "../../services/breadcrumbs/fndRbrSrv.js";

export const delRbrCnt = async (req, res) => {
  const { breadcrumbs_id } = req.body;
  try {
    if (!breadcrumbs_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndRbr(breadcrumbs_id);
    if (!existing) {
      return res.status(404).json({ message: "breadcrumbs não encontrade." });
    }
    const result = await delRbr(breadcrumbs_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
