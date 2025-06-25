import { fndRol } from "../../services/role/fndRolSrv.js";
import { updRol } from "../../services/role/updRolSrv.js";

//

export const updRolCnt = async (req, res) => {
  const { role_id, updateData } = req.body;
  try {
    if (!role_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndRol(role_id);
    if (!existing) {
      return res.status(404).json({ message: "Não encontrado." });
    }
    req.body = {
      role_id: existing.role_id,
      ...updateData,
    };
    const result = await updRol(existing.role_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
