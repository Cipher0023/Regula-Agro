import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/prismaClient.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const logDev = async (email, password) => {
  console.log("📥 Requisição recebida no loginDev", { email, password });

  if (!email) {
    throw new Error("Email obrigatório");
  }
  if (!password) {
    throw new Error("Senha obrigatória");
  }

  const devSearch = await prisma.developer.findUnique({ where: { email } });
  if (!devSearch) {
    console.warn("⚠️ Developer não encontrado:", email);
    throw new Error("Dev não encontrado");
  }
  console.log("✅ Developer encontrado");

  const isMatch = await bcrypt.compare(password, devSearch.password);
  if (!isMatch) {
    throw new Error("Senha incorreta");
  }

  const token = jwt.sign({ id: devSearch.dev_id }, JWT_SECRET, {
    expiresIn: "7d",
  });
  console.log("🔐 Token gerado com sucesso para:", email);

  return {
    message: "Login realizado com sucesso",
    developer: {
      name: devSearch.name,
      email: devSearch.email,
      dev_id: devSearch.dev_id,
    },
    token,
  };
};
