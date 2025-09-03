import bcrypt from "bcrypt";
import { generateToken } from "../../controllers/tokengenerator/tokenGenerator.js";
import prisma from "../../prisma/prismaClient.js";


export const logRdr = async (email, password, type = "reader") => {
  console.log("📥 Requisição recebida no loginRdr", { email, password });

  if (!email) {
    throw new Error("Email obrigatório");
  }
  if (!password) {
    throw new Error("Senha obrigatória");
  }

  const rdrSearch = await prisma.reader.findUnique({ where: { email } });
  if (!rdrSearch) {
    console.warn("⚠️ reader não encontrado:", email);
    throw new Error("reader não encontrado");
  }
  console.log("✅ reader encontrado");

  const isMatch = await bcrypt.compare(password, rdrSearch.password);
  if (!isMatch) {
    throw new Error("Senha incorreta");
  }

  const token = generateToken({ type, id: rdrSearch.reader_id ?? rdrSearch.rdr_id, role: null }, { expiresIn: "7d" });
  console.log("🔐 Token gerado com sucesso para:", email);

  return {
    message: "Login realizado com sucesso",
    reader: {
      name: rdrSearch.name,
      email: rdrSearch.email,
      reader_id: rdrSearch.reader_id ?? rdrSearch.rdr_id,
      image: rdrSearch.image ?? null,
    },
    token,
  };
};
