import { delCre } from "../../services/creator/delCreSrv.js";

export const delCreCnt = async (req, res) => {
  const { creator_id } = req.body;
  try {
    if (!creator_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const result = await delCre(creator_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
