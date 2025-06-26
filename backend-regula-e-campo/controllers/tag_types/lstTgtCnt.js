import { lstTgt } from "../../services/tag_types/lstTgtSrv.js";

export const lstTgtCnt = async (req, res) => {
  try {
    const tag_types = await lstTgt();
    return res.status(200).json(tag_types);
  } catch (error) {
    console.error("Erro no controller ao listar DocTypes");
  }
};
