import prisma from "../../prisma/prismaClient.js";

//service padrão da Cubic para registros em tabelas

export const regLik = async (
  reader_id,
  news_id,
) => {
  //verificação de campos
  if (
    !reader_id ||
    !news_id 
  
  ) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  //conversor de boolean
  function booleanConverter(value) {
    if (value == "true") return true;
    if (value == "false") return false;
    else {
      throw new Error("campo contem um valor inválido para boolean");
    }
  }
  //verificação se registro já existe
  const existing = await prisma.likes.findFirst({
    where: {
      reader_id: reader_id,
    },
  });
  if (existing) {
    throw new Error("reader_id já existe");
  }
  const newRegister = await prisma.likes.create({
    data: {
      reader_id: reader_id,
      news_id: news_id,
    },
  });
  return newRegister;
};
