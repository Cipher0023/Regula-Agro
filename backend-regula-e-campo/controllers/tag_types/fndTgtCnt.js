import { fndTgt } from "../../services/tag_types/fndTgtSrv.js";

export const fndTgtCnt = async (req, res) => {
  try {
    const { tag_id } = req.query;
    if (!tag_id) {
      return res.status(400).json({ message: "tag_id é obrigatório." });
    }
    const result = await fndTgt(tag_id);

    return res.status(200).json({
      message: "DocType encontrado.",
      result,
    });
  } catch (error) {
    console.error("Erro no controller ao procurar developer:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
