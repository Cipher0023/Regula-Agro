import bcrypt from "bcrypt"; // For password hashing
import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const regDev = async (name, email, password) => {
  console.log("Dados recebidos:", {
    name,
    email,
    password,
  });

  if (!name || !email || !password) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  const existing = await prisma.developer.findUnique({
    where: {
      email: email,
    },
  });
  if (existing) {
    throw new Error("Usuário já existe");
  }
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);
  const newUser = await prisma.developer.create({
    data: {
      name: name,
      email: email,
      password: hashpassword,
    },
  });
  return newUser;
};
