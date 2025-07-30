import { fndExm } from "../../services/Example/fndExmSrv.js";
import { updExm } from "../../services/Example/updExmSrv.js";

export const updExmCnt = async (req, res) => {
  const { example_id, updateData } = req.body;
  try {
    if (!example_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndExm(example_id);
    if (!existing) {
      return res.status(404).json({ message: " Example Não encontrade." });
    }
    req.body = {
      example_id: existing.example_id,
      ...updateData,
    };
    const result = await updExm(example_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
