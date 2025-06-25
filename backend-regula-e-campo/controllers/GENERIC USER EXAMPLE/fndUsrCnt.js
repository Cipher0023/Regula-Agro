import { fndUsr } from "../../services/User/fndUsrSrv.js";

export const fndUsrCnt = async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(400).json({ message: "Id é obrigatório." });
    }
    const result = await fndUsr(user_id);
    if (!result) {
      return res.status(404).json({ message: "Não encontrada." });
    }

    return res.status(200).json({
      message: "Encontrado.",
      result,
    });
  } catch (error) {
    console.error("Erro de busca:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
