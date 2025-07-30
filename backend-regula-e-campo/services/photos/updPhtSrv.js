import prisma from "../../prisma/primaClient.js";

export const updExm = async (example_id, updateData) => {
  try {
    //não se esqueça de trocar os allowed fields de acordo com o schema.
    const allowedFields = [
      "key",
      "data1",
      "data2",
      "data3",
      "data4",
      "dataInt",
      "dataFloat",
      "dataBoolean",
      "dataDate",
      "dataLink",
    ];
    const updateFields = {};
    //conversor de boolean
    function booleanConverter(value) {
      if (value == "true") return true;
      if (value == "false") return false;
      else {
        throw new Error("campo contem um valor inválido para boolean");
      }
    }
    // popula updateFields com a updateData colocando o tipo certo de variável
    for (const field of allowedFields) {
      const value = updateData[field];
      switch (field) {
        case "dataInt":
          const intVal = parseInt(value);
          if (isNaN(intVal))
            throw new Error(`Campo "&{field}" deve ser um número int valido`);
          updateFields[field] = intVal;
          break;
        case "dataFloat":
          const floatVal = parseFloat(value);
          if (isNaN(floatVal))
            throw new Error(`Campo "&{field}" deve ser um número float valido`);
          updateFields[field] = floatVal;
          break;
        case "dataBoolean":
          const bolVal = booleanConverter(value);
          if (isNaN(bolVal))
            throw new Error(`Campo "&{field}" deve ser uma boolean valida`);
          updateFields[field] = bolVal;
          break;
        case "dataDate":
          const dateVal = new Date(value);
          if (isNaN(dateVal))
            throw new Error(`Campo "&{field}" deve ser uma data valida`);
          updateFields[field] = dateVal;
          break;
        default:
          updateFields[field] = value;
          break;
      }
    }
    // verifica se pelo menos um dado vai ser atualizado
    if (Object.keys(updateFields).length === 0) {
      throw new Error("Nenhum dado para atualizar");
    }
    // realiza o update tendo como base no updateFields
    const update = await prisma.example.update({
      where: { example_id },
      data: updateFields,
    });
    return {
      message: "Atualizado com sucesso",
      newData: update,
    };
  } catch (err) {
    console.error("Erro ao atualizar Exemplo", err);
    throw err;
  }
};
