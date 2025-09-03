import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Gera um JWT padronizado para toda a aplicação.
 * O payload contém exatamente 3 campos: { type, id, role }
 * - type: "creator" | "reader" | "dev"
 * - id: identificador do usuário autenticado
 * - role: somente aplicável a creators; para os demais deve ser null
 *
 * @param {Object} params
 * @param {"creator"|"reader"|"dev"} params.type
 * @param {string|number} params.id
 * @param {string|null} [params.role=null]
 * @param {Object} [options]
 * @param {string|number} [options.expiresIn="7d"]
 * @returns {string} token JWT assinado
 */
export const generateToken = (params, options = {}) => {
  if (!JWT_SECRET) {
    // Evita quebrar o servidor no import, mas alerta imediatamente.
    console.warn("JWT_SECRET não está definido nas variáveis de ambiente.");
  }

  const { type, id, role = null } = params || {};

  if (!type) throw new Error("type é obrigatório para gerar o token");
  if (id === undefined || id === null) throw new Error("id é obrigatório para gerar o token");

  const payload = { type, id, role: role ?? null };
  const jwtOptions = { expiresIn: options.expiresIn ?? "7d" };

  return jwt.sign(payload, JWT_SECRET, jwtOptions);
};

/**
 * Define o cookie httpOnly do token de forma padronizada.
 *
 * @param {import('express').Response} res
 * @param {string} token
 * @param {Object} [options]
 */
export const setTokenCookie = (res, token, options = {}) => {
  if (!token || !res?.cookie) return;

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dias
    path: "/",
    ...options,
  });
};

export default {
  generateToken,
  setTokenCookie,
};
