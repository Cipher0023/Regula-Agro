
import { regRdr } from "../../services/reader/regRdrSrv.js";


export const regRdrCnt = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      
    } = req.body;
    // Enviando dados para o service
    const newreader = await regRdr(
      name,
      email,
      password
    );
    console.log(newreader);
    return res.status(201).json(newreader);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
