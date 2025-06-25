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
  // Get token from request headers
  const token = req.headers.authorization;

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "Acesso negado" });
  }

  try {
    // Verify and decode the JWT token, removing 'Bearer ' prefix
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    console.log(decoded);
  } catch (err) {
    // Return error if token is invalid
    return res.status(401).json({ message: "Token inválido" });
  }

  // Proceed to next middleware
  next();
};

export default auth;
