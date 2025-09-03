import { logCre } from "../../services/creator/logCreSrv.js";
import { setTokenCookie } from "../tokengenerator/tokenGenerator.js";

export const logCreCnt = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ message: "email obrigatório." });
    }

    req.body = {
      email: email,
      password: password,
    };
    const result = await logCre(email, password, "creator");

    // Define cookie HttpOnly com o token
    const token = result?.token;
    if (token) {
      setTokenCookie(res, token);
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer login:", error.message);
    return res.status(500).json({ message: "Erro ao fazer login." });
  }
};
