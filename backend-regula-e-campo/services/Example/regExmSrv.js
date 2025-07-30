import prisma from "../../prisma/primaClient.js";

//service padrão da Cubic para registros em tabelas

export const regExm = async (
  key,
  data1,
  data2,
  data3,
  data4,
  dataInt,
  dataFloat,
  dataBoolean,
  dataDate,
  dataLink
) => {
  //verificação de campos
  if (
    !key ||
    !data1 ||
    !data2 ||
    !data3 ||
    !data4 ||
    !dataInt ||
    !dataFloat ||
    !dataBoolean ||
    !dataDate ||
    !dataLink
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
  const boolean = booleanConverter(dataBoolean);
  //verificação se registro já existe
  const existing = await prisma.example.findUnique({
    where: {
      key: key,
    },
  });
  if (existing) {
    throw new Error("key já existe");
  }
  const newRegister = await prisma.example.create({
    data: {
      key: key,
      data1: data1,
      data2: data2,
      data3: data3,
      data4: data4,
      dataInt: parseInt(dataInt),
      dataFloat: parseFloat(dataFloat),
      dataBoolean: boolean,
      dataDate: new Date(dataDate),
      dataLink: dataLink,
    },
  });
  return newRegister;
};
