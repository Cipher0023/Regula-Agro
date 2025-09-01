import { fndRdr } from "../../services/reader/fndRdrSrv.js";

export const fndRdrCnt = async (req, res) => {
  try {
    const { reader_id } = req.query;
    if (!reader_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndRdr(reader_id);
    if (!result) {
      return res.status(404).json({ message: "reader não encontrade." });
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
