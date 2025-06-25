import { lstRol } from "../../services/role/lstRolSrv.js";

export const lstRolCnt = async (req, res) => {
  try {
    const docTypes = await lstRol();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no controller ao listar");
  }
};
