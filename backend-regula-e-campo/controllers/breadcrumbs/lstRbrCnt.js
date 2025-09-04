import { lstRbr } from "../../services/breadcrumbs/lstRbrSrv.js";

export const lstRbrCnt = async (req, res) => {
  try {
    const breadcrumbs = await lstRbr();
    return res.status(200).json(breadcrumbs);
  } catch (error) {
    console.error("Erro ao listar breadcrumbs");
  }
};
