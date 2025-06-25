import { lstUsr } from "../../services/User/lstUsrSrv.js";

export const lstUsrCnt = async (req, res) => {
  try {
    const docTypes = await lstUsr();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no contUsrler ao listar");
  }
};
