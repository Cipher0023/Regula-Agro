import { lstLik } from "../../services/likes/lstLikSrv.js";

export const lstLikCnt = async (req, res) => {
  try {
    const likes = await lstLik();
    return res.status(200).json(likes);
  } catch (error) {
    console.error("Erro ao listar likes");
  }
};
