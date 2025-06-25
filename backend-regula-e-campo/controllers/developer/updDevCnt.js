import { fndDev } from "../../services/developer/fndDevSrv.js";
import { updDev } from "../../services/developer/updDevSrv.js";

export const updDevCnt = async (req, res) => {
  const { dev_id, updateData } = req.body;
  try {
    if (!dev_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndDev(dev_id);
    if (!existing) {
      return res.status(404).json({ message: "Não encontrado." });
    }
    req.body = {
      dev_id: existing.dev_id,
      ...updateData,
    };
    const result = await updDev(existing.dev_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
