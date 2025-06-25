import bcrypt from "bcrypt"; // For password hashing
import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const regUsr = async (
  name,
  email,
  telephone,
  password,
  document_type,
  document_number,
  role_id,
  salary
) => {
  console.log("Dados recebidos:", {
    name,
    email,
    telephone,
    password,
    document_type,
    document_number,
    role_id,
    salary,
  });

  if (
    !name ||
    !email ||
    !password ||
    !role_id ||
    !document_type ||
    !document_number ||
    !salary ||
    !telephone
  ) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  const existing = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (existing) {
    throw new Error("Usuário já existe");
  }
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      telephone: telephone,
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
      salary: parseFloat(salary), // Converta para float
    },
  });
  return newUser;
};
