import { lstNws } from "../../services/news/lstNwsSrv.js";

export const lstNwsCnt = async (req, res) => {
  try {
    const docTypes = await lstNws();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no controller ao listar");
  }
};
