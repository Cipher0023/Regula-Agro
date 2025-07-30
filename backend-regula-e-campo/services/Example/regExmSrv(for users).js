import bcrypt from "bcrypt"; // For password hashing
import prisma from "../../prisma/primaClient.js";

//service padrão da Cubic para registros de usuários

export const regExm = async (
  key,
  password,
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  dataLink
) => {
  //verificação de campos
  if (
    !key ||
    !password ||
    !data1 ||
    !data2 ||
    !data3 ||
    !data4 ||
    !data5 ||
    !data6 ||
    !dataLink
  ) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  //verificação se registro já existe
  const existing = await prisma.example.findUnique({
    where: {
      key: key,
    },
  });
  if (existing) {
    throw new Error("Example já existe");
  }
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);
  const newUser = await prisma.example.create({
    data: {
      Key: key,
      password: hashpassword,
      data1: data1,
      data2: data2,
      data3: data3,
      data4: data4,
      data5: data5,
      data6: data6,
      dataLink: {
        connect: {
          dataLink_id: dataLink,
        },
      },
    },
  });
  return newUser;
};
