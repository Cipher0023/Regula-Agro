import { fndCre } from "../../services/creator/fndCreSrv.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const fndCreCnt = async (req, res) => {
  try {
    let { creator_id } = req.query;

    // Se creator_id não vier na query, tenta extrair do token (cookie ou header)
    if (!creator_id) {
      const bearer = req.headers?.authorization;
      const cookieToken = req.cookies?.token;
      const token = cookieToken || (bearer ? bearer.replace("Bearer ", "") : null);

      if (token) {
        try {
          const decoded = jwt.verify(token, JWT_SECRET);
          // Aceita 'sub' (novo) ou 'id' (legado) no payload
          creator_id = decoded?.sub || decoded?.id || null;
        } catch (err) {
          return res.status(401).json({ message: "Token inválido" });
        }
      }
    }

    if (!creator_id) {
      return res.status(400).json({ message: "Id é obrigatório." });
    }

    const result = await fndCre(creator_id);
    if (!result) {
      return res.status(404).json({ message: "Não encontrada." });
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
