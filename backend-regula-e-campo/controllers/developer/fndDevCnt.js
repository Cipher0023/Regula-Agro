import { fndDev } from "../../services/developer/fndDevSrv.js";

export const fndDevCnt = async (req, res) => {
  try {
    const { dev_id } = req.query;
    if (!dev_id) {
      return res.status(400).json({ message: "Id é obrigatório." });
    }
    const result = await fndDev(dev_id);
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
