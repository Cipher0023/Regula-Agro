import { fndExm } from "../../services/Example/fndExmSrv.js";

export const fndExmCnt = async (req, res) => {
  try {
    const { example_id } = req.query;
    if (!example_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndExm(example_id);
    if (!result) {
      return res.status(404).json({ message: "Example não encontrade." });
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
