import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const lstNws = async () => {
  try {
    const result = await prisma.news.findMany({ include: { tag_types: true } });
    const mapped = result.map(n => ({
      news_id: n.news_id,
      title: n.title,
      text: n.text,
      creator_id: n.creator_id,
      tag: n.tag_types.name,
    }));
    return mapped;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
