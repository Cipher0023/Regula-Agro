import { fndTgt } from "../../services/tag_types/fndTgtSrv.js";
import { updTgt } from "../../services/tag_types/updTgtSrv.js";

//

export const updTgtCnt = async (req, res) => {
  const { tag_id, updateData } = req.body;
  try {
    if (!tag_id) {
      return res.status(400).json({ message: "tag_id obrigatório." });
    }
    const existingDocType = await fndTgt(tag_id);
    if (!existingDocType) {
      return res.status(404).json({ message: "Tag não encontrada." });
    }
    req.body = {
      tag_id: existingDocType.tag_id,
      ...updateData,
    };
    const result = await updTgt(existingDocType.tag_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro no controller ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
