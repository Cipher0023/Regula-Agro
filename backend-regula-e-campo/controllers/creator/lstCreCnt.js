import { lstCre } from "../../services/creator/lstCreSrv.js";

export const lstCreCnt = async (req, res) => {
  try {
    const docTypes = await lstCre();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no contCreler ao listar");
  }
};
