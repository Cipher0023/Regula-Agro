import { delDct } from "../../services/docType/delDctSrv.js";

export const delDctCnt = async (req, res) => {
  const { document_type_id } = req.body;
  try {
    if (!document_type_id) {
      return res
        .status(400)
        .json({ message: "o document_type_id é obrigatório." });
    }
    const result = await delDct(document_type_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error(
      "Erro no controller ao fazer o delete do Doctype:",
      error.message
    );
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
