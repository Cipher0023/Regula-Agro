import { lstPag } from "../../services/page/lstPagSrv.js";

export const lstPagCnt = async (req, res) => {
  try {
    const page = await lstPag();
    return res.status(200).json(page);
  } catch (error) {
    console.error("Erro ao listar page");
  }
};
