import { fndPht } from "../../services/photos/fndPhtSrv.js";
import { updPht } from "../../services/photos/updPhtSrv.js";

export const updPhtCnt = async (req, res) => {
  const { photo_id, updateData } = req.body;
  try {
    if (!photo_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndPht(photo_id);
    if (!existing) {
      return res.status(404).json({ message: " photo Não encontrade." });
    }
    req.body = {
      photo_id: existing.photo_id,
      ...updateData,
    };
    const result = await updPht(photo_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
