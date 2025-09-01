import { lstRdr } from "../../services/reader/lstRdrSrv.js";

export const lstRdrCnt = async (req, res) => {
  try {
    const reader = await lstRdr();
    return res.status(200).json(reader);
  } catch (error) {
    console.error("Erro ao listar reader");
  }
};
