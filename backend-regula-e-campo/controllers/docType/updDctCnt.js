import { fndDct } from "../../services/docType/fndDctSrv.js";
import { updDct } from "../../services/docType/updDctSrv.js";

//

export const updDctCnt = async (req, res) => {
  const { document_type_id, updateData } = req.body;
  try {
    if (!document_type_id) {
      return res.status(400).json({ message: "document_type_id obrigatório." });
    }
    const existingDocType = await fndDct(document_type_id);
    if (!existingDocType) {
      return res.status(404).json({ message: "Desenvolvedor não encontrado." });
    }
    req.body = {
      document_type_id: existingDocType.document_type_id,
      ...updateData,
    };
    const result = await updDct(existingDocType.document_type_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro no controller ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
