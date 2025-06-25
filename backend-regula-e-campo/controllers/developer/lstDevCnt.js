import { lstDev } from "../../services/developer/lstDevSrv.js";

export const lstDevCnt = async (req, res) => {
  try {
    const docTypes = await lstDev();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no contDevler ao listar");
  }
};
