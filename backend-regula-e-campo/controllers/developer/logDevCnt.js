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

    // Define cookie HttpOnly com o token
    const token = result?.token;
    if (token) {
      const isProd = process.env.NODE_ENV === "production";
      res.cookie("token", token, {
        httpOnly: true,
        secure: isProd, // true somente em https
        sameSite: isProd ? "none" : "lax", // 'none' se cross-site em prod
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dias
        path: "/",
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer login:", error.message);
    return res.status(500).json({ message: "Erro ao fazer login." });
  }
};
