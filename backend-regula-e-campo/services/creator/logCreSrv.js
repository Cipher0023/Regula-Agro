import bcrypt from "bcrypt";
import { generateToken } from "../../controllers/tokengenerator/tokenGenerator.js";
import prisma from "../../prisma/prismaClient.js";

export const logCre = async (email, password, type = "creator") => {
  console.log("📥 Requisição recebida no loginCre", { email, password });

  if (!email) {
    throw new Error("Email obrigatório");
  }
  if (!password) {
    throw new Error("Senha obrigatória");
  }

  const creSearch = await prisma.creator.findUnique({ where: { email } });
  if (!creSearch) {
    console.warn("⚠️ Creator não encontrado:", email);
    throw new Error("Cre não encontrado");
  }
  console.log("✅ Creator encontrado");

  const isMatch = await bcrypt.compare(password, creSearch.password);
  if (!isMatch) {
    throw new Error("Senha incorreta");
  }

  const token = generateToken(
    {
      type,
      id: creSearch.creator_id ?? creSearch.cre_id,
      role: creSearch.role ?? null,
    },
    { expiresIn: "7d" }
  );
  console.log("🔐 Token gerado com sucesso para:", email);

  return {
    message: "Login realizado com sucesso",
    creator: {
      name: creSearch.name,
      email: creSearch.email,
      creator_id: creSearch.creator_id ?? creSearch.cre_id,
      image: creSearch.image ?? null,
    },
    token,
  };
};
