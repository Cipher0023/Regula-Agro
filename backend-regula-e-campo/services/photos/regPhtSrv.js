import prisma from "../../prisma/prismaClient.js";

// service padrão da Cubic para registros em tabelas
export const regPht = async (source, description, creator_id) => {
  // verificação de campos
  if (!source || !description || !creator_id) {
    throw new Error("Preencha todos os campos obrigatórios");
  }

  // conversor de boolean
  function booleanConverter(value) {
    if (value == "true") return true;
    if (value == "false") return false;
    else {
      throw new Error("campo contém um valor inválido para boolean");
    }
  }

  // verificação se registro já existe
  const existing = await prisma.photos.findFirst({
    where: {
      source: source,
    },
  });

  if (existing) {
    throw new Error("source já existe");
  }

  const newRegister = await prisma.photos.create({
    data: {
      source: source,
      description: description,
      creator_id: creator_id,
    },
  });

  return newRegister;
};
