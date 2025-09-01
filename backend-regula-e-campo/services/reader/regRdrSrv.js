import prisma from "../../prisma/prismaClient.js";

// service padrão da Cubic para registros em tabelas
export const regRdr = async (name, email, password) => {
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

  // criação do registro
  const newRegister = await prisma.reader.create({
    data: {
      name,
      email,
      password,
    },
  });

  return newRegister;
};
