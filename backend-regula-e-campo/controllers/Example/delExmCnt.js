import { delExm } from "../../services/Example/delExmSrv.js";
import { fndExm } from "../../services/Example/fndExmSrv.js";

export const delExmCnt = async (req, res) => {
  const { example_id } = req.body;
  try {
    if (!example_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndExm(example_id);
    if (!existing) {
      return res.status(404).json({ message: "Example não encontrade." });
    }
    const result = await delExm(example_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
