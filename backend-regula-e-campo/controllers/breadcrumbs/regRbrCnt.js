
import { regRbr } from "../../services/breadcrumbs/regRbrSrv.js";


export const regRbrCnt = async (req, res) => {
  try {
    const {
      reader_id,
      adress,
    } = req.body;
    // Enviando dados para o service
    const newbreadcrumbs = await regRbr(
      reader_id,
      adress
    );
    console.log(newbreadcrumbs);
    return res.status(201).json(newbreadcrumbs);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
