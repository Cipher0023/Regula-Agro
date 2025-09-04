import { lstCom } from "../../services/comments/lstComSrv.js";

export const lstComCnt = async (req, res) => {
  try {
    const comments = await lstCom();
    return res.status(200).json(comments);
  } catch (error) {
    console.error("Erro ao listar comments");
  }
};
