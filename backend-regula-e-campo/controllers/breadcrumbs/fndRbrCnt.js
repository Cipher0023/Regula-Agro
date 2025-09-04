import { fndRbr } from "../../services/breadcrumbs/fndRbrSrv.js";

export const fndRbrCnt = async (req, res) => {
  try {
    const { breadcrumbs_id } = req.query;
    if (!breadcrumbs_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndRbr(breadcrumbs_id);
    if (!result) {
      return res.status(404).json({ message: "breadcrumbs não encontrade." });
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
