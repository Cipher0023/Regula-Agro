import { delDev } from "../../services/developer/delDevSrv.js";

export const delDevCnt = async (req, res) => {
  const { dev_id } = req.body;
  try {
    if (!dev_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const result = await delDev(dev_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
