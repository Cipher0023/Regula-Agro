import { fndDct } from "../../services/docType/fndDctSrv.js";

export const fndDctCnt = async (req, res) => {
  try {
    const { document_type_id } = req.query;
    if (!document_type_id) {
      return res.status(400).json({ message: "docType id é obrigatório." });
    }
    const docType = await fndDct(document_type_id);

    return res.status(200).json({
      message: "DocType encontrado.",
      docType,
    });
  } catch (error) {
    console.error("Erro no controller ao procurar developer:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
