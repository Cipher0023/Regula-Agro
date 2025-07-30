import { lstExm } from "../../services/Example/lstExmSrv.js";

export const lstExmCnt = async (req, res) => {
  try {
    const Example = await lstExm();
    return res.status(200).json(Example);
  } catch (error) {
    console.error("Erro ao listar Example");
  }
};
