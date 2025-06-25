import { fndUsr } from "../../services/User/fndUsrSrv.js";
import { updUsr } from "../../services/User/updUsrSrv.js";

export const updUsrCnt = async (req, res) => {
  const { user_id, updateData } = req.body;
  try {
    if (!user_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndUsr(user_id);
    if (!existing) {
      return res.status(404).json({ message: "Não encontrado." });
    }
    req.body = {
      user_id: existing.user_id,
      ...updateData,
    };
    const result = await updUsr(existing.user_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
