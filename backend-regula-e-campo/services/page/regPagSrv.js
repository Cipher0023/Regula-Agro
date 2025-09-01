import prisma from "../../prisma/prismaClient.js";

//service padrão da Cubic para registros em tabelas

export const regPag = async (
  dev_id
) => {
  //verificação de campos
  if (!dev_id) {
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
  //const boolean = booleanConverter(dataBoolean);
  //verificação se registro já existe
  const existing = await prisma.page.findFirst({
    where: {
      dev_id: dev_id,
    },
  });
  if (existing) {
    throw new Error("dev_id já existe");
  }
  const newRegister = await prisma.page.create({
    data: {
      dev_id: dev_id,

    },
  });
  return newRegister;
};
