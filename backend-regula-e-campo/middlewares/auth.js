import jwt from "jsonwebtoken";

// Secret key for JWT verification from environment variables
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Authentication middleware to verify JWT tokens
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {void}
 */
const auth = (req, res, next) => {
  const cookieToken = req.cookies?.token;
  const token = cookieToken;

  // Se não houver token em nenhuma fonte, nega acesso
  if (!token) {
    return res.status(401).json({ message: "Acesso negado" });
  }

  try {
    // Verifica e decodifica o JWT
    const decoded = jwt.verify(token, JWT_SECRET);
    // Disponibiliza o payload para os próximos handlers
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({ message: "Token inválido" });
  }

  next();
};

export default auth;
