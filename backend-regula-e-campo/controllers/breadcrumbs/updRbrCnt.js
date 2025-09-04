import { fndRbr } from "../../services/breadcrumbs/fndRbrSrv.js";
import { updRbr } from "../../services/breadcrumbs/updRbrSrv.js";

export const updRbrCnt = async (req, res) => {
  const { breadcrumbs_id, updateData } = req.body;
  try {
    if (!breadcrumbs_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndRbr(breadcrumbs_id);
    if (!existing) {
      return res.status(404).json({ message: " breadcrumbs Não encontrade." });
    }
    req.body = {
      breadcrumbs_id: existing.breadcrumbs_id,
      ...updateData,
    };
    const result = await updRbr(breadcrumbs_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
