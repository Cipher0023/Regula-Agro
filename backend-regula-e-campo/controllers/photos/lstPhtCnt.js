import { lstPht } from "../../services/photos/lstPhtSrv.js";

export const lstPhtCnt = async (req, res) => {
  try {
    const photo = await lstPht();
    return res.status(200).json(photo);
  } catch (error) {
    console.error("Erro ao listar photo");
  }
};
