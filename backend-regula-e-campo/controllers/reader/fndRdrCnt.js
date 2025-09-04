import { fndRdr } from "../../services/reader/fndRdrSrv.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const fndRdrCnt = async (req, res) => {
  try {
    let { reader_id } = req.query;

    // Se reader_id não vier na query, tenta extrair do token (cookie ou header)
    if (!reader_id) {
      const cookieToken = req.cookies?.token;
      const token = cookieToken;
      if (token) {
        try {
          const decoded = jwt.verify(token, JWT_SECRET);
          // Aceita 'sub' (novo) ou 'id' (legado) no payload
          reader_id = decoded?.sub || decoded?.id || null;
        } catch (err) {
          return res.status(401).json({ message: "Token inválido" });
        }
      }
    }

    if (!reader_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndRdr(reader_id);
    if (!result) {
      return res.status(404).json({ message: "reader não encontrade." });
    }

    return res.status(200).json({
      message: "Encontrado.",
      result,
    });
  } catch (error) {
    console.error("Erro de busca:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
