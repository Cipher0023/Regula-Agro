import { delRol } from "../../services/role/delRolSrv.js";

export const delRolCnt = async (req, res) => {
  const { role_id } = req.body;
  try {
    if (!role_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const result = await delRol(role_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
