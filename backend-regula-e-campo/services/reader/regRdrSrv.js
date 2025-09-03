import prisma from "../../prisma/prismaClient.js";
import bcrypt from "bcrypt";

// service padrão da Cubic para registros em tabelas
export const regRdr = async (name, email, password, image) => {
  // verificação de campos obrigatórios
  if (!name || !email || !password) {
    throw new Error("Preencha todos os campos obrigatórios");
  }

  // verificação se já existe leitor com o mesmo nome
  const existing = await prisma.reader.findFirst({
    where: {
      name: name,
    },
  });

  if (existing) {
    throw new Error("name já existe");
  }
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);
  // criação do registro
  const newRegister = await prisma.reader.create({
    data: {
      name: name,
      email: email,
      password: hashpassword,
      image: image,
    },
  });

  return newRegister;
};
