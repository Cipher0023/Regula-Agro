import { delRdr } from "../../services/reader/delRdrSrv.js";
import { fndRdr } from "../../services/reader/fndRdrSrv.js";

export const delRdrCnt = async (req, res) => {
  const { reader_id } = req.body;
  try {
    if (!reader_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndRdr(reader_id);
    if (!existing) {
      return res.status(404).json({ message: "reader não encontrade." });
    }
    const result = await delRdr(reader_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
