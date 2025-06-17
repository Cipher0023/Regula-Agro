import prisma from '../prisma/client';

// ✅ Criar um novo leitor
export async function createDevService(data: any) {
  return await prisma.developer.create({ data });
}

// ✅ Buscar todos os leitores
export async function getAllDevService() {
  return await prisma.developer.findMany();
}

// ✅ Buscar um leitor por ID
export async function getdevByIdService(id: string) {
  return await prisma.developer.findUnique({
    where: { dev_id: id },
  });
}

// ✅ Deletar um leitor por ID
export async function deleteDevByIdService(id: string) {
  return await prisma.developer.delete({
    where: { dev_id: id },
  });
}

// ✅ Atualizar um leitor por ID
export async function updateDevByIdService(id: string, data: any) {
  return await prisma.developer.update({
    where: { dev_id: id },
    data,
  });
} 