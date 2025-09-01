import { fndDev } from "../../services/developer/fndDevSrv.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const fndDevCnt = async (req, res) => {
  try {
    let { dev_id } = req.query;

    // Se dev_id não vier na query, tenta extrair do token
    if (!dev_id) {
      const bearer = req.headers?.authorization;
      const cookieToken = req.cookies?.token;
      const token = cookieToken || (bearer ? bearer.replace("Bearer ", "") : null);

      if (token) {
        try {
          const decoded = jwt.verify(token, JWT_SECRET);
          dev_id = decoded?.id;
        } catch (err) {
          return res.status(401).json({ message: "Token inválido" });
        }
      }
    }

    if (!dev_id) {
      return res.status(400).json({ message: "Id é obrigatório." });
    }

    const result = await fndDev(dev_id);
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
