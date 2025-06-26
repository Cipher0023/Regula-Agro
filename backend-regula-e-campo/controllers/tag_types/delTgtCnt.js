import { delTgt } from "../../services/tag_types/delTgtSrv.js";

export const delTgtCnt = async (req, res) => {
  const { tag_id } = req.body;
  try {
    if (!tag_id) {
      return res.status(400).json({ message: "o tag_id é obrigatório." });
    }
    const result = await delTgt(tag_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error(
      "Erro no controller ao fazer o delete do tag:",
      error.message
    );
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
