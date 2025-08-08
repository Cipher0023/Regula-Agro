import { lstPgs } from "../../services/page/lstPgsSrv.js";

export const lstPgsCnt = async (req, res) => {
  try {
    const page = await lstPgs();
    return res.status(200).json(page);
  } catch (error) {
    console.error("Erro ao listar page");
  }
};
