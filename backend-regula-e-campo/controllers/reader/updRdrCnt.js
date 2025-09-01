import { fndRdr } from "../../services/reader/fndRdrSrv.js";
import { updRdr } from "../../services/reader/updRdrSrv.js";

export const updRdrCnt = async (req, res) => {
  const { reader_id, updateData } = req.body;
  try {
    if (!reader_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndRdr(reader_id);
    if (!existing) {
      return res.status(404).json({ message: " reader Não encontrade." });
    }
    req.body = {
      reader_id: existing.reader_id,
      ...updateData,
    };
    const result = await updRdr(reader_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
