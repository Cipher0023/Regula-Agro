import prisma from "../../prisma/prismaClient.js";

//service padrão da Cubic para registros em tabelas

export const regCom = async (
  reader_id,
  news_id,
  text,
  
) => {
  //verificação de campos
  if (
    !reader_id ||
    !news_id ||
    !text 
    
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
  //transformando em boolean
  
  //verificação se registro já existe
  const existing = await prisma.comments.findFirst({
    where: {
      reader_id: reader_id,
    },
  });
  if (existing) {
    throw new Error("reader_id já existe");
  }
  const newRegister = await prisma.comments.create({
    data: {
      reader_id: reader_id,
      news_id: news_id,
      text: text,
    },
  });
  return newRegister;
};
