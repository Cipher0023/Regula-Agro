import { delUsr } from "../../services/User/delUsrSrv.js";

export const delUsrCnt = async (req, res) => {
  const { user_id } = req.body;
  try {
    if (!user_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const result = await delUsr(user_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
