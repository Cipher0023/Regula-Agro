import { fndPht } from "../../services/photos/fndPhtSrv.js";

export const fndPhtCnt = async (req, res) => {
  try {
    const { photo_id } = req.query;
    if (!photo_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndPht(photo_id);
    if (!result) {
      return res.status(404).json({ message: "photo não encontrade." });
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
