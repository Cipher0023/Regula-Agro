import prisma from '../prisma/client';

// ✅ Criar um novo leitor
export async function createReaderService(data: any) {
  return await prisma.reader.create({ data });
}

// ✅ Buscar todos os leitores
export async function getAllReadersService() {
  return await prisma.reader.findMany();
}

// ✅ Buscar um leitor por ID
export async function getReaderByIdService(id: string) {
  return await prisma.reader.findUnique({
    where: { reader_id: id },
  });
}

// ✅ Deletar um leitor por ID
export async function deleteReaderByIdService(id: string) {
  return await prisma.reader.delete({
    where: { reader_id: id },
  });
}

// ✅ Atualizar um leitor por ID
export async function updateReaderByIdService(id: string, data: any) {
  return await prisma.reader.update({
    where: { reader_id: id },
    data,
  });
}