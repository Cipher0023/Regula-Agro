import { logDev } from "../../services/developer/logDevSrv.js";

export const logDevCnt = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ message: "email obrigatório." });
    }

    req.body = {
      email: email,
      password: password,
    };
    const result = await logDev(email, password);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer login:", error.message);
    return res.status(500).json({ message: "Erro ao fazer login." });
  }
};
