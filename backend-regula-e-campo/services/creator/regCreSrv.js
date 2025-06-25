import bcrypt from "bcrypt"; // For password hashing
import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const regCre = async (
  name,
  email,
  password,
  document_type,
  document_number,
  role_id
) => {
  console.log("Dados recebidos:", {
    name,
    email,
    password,
    document_type,
    document_number,
    role_id,
  });

  if (
    !name ||
    !email ||
    !password ||
    !role_id ||
    !document_type ||
    !document_number
  ) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  const existing = await prisma.creator.findUnique({
    where: {
      email: email,
    },
  });
  if (existing) {
    throw new Error("Usuário já existe");
  }
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);
  const newUser = await prisma.creator.create({
    data: {
      name: name,
      email: email,
      password: hashpassword,
      document_type: {
        connect: {
          document_type_id: document_type,
        },
      },
      document_number: document_number,
      role: {
        connect: {
          role_id: role_id,
        },
      },
    },
  });
  return newUser;
};
