import React from "react";

type BadgeType =
  | "culturas"
  | "defensivos"
  | "bioinsumos"
  | "fertilizantes"
  | "biodiversidade"
  | "pesquisa";

interface BadgeProps {
  type: BadgeType;
}

const STYLES: Record<BadgeType, { text: string; bg: string; textColor: string }> = {
  culturas: {
    text: "Culturas",
    bg: "bg-green-100",
    textColor: "text-green-800",
  },
  defensivos: {
    text: "Defensivos agrícolas",
    bg: "bg-orange-100",
    textColor: "text-orange-800",
  },
  bioinsumos: {
    text: "Bioinsumos",
    bg: "bg-blue-900",
    textColor: "text-white",
  },
  fertilizantes: {
    text: "Fertilizantes",
    bg: "bg-yellow-200", // Marrom é difícil, então usamos amarelo queimado
    textColor: "text-yellow-900",
  },
  biodiversidade: {
    text: "Biodiversidade",
    bg: "bg-blue-100",
    textColor: "text-blue-800",
  },
  pesquisa: {
    text: "Pesquisa e Inovação",
    bg: "bg-emerald-100",
    textColor: "text-emerald-800",
  },
};

export default function Badge({ type }: BadgeProps) {
  const style = STYLES[type];

  return (
    <div className={`w-fit h-8 inline-flex items-center justify-center px-3 rounded-full font-semibold text-xs ${style.bg} ${style.textColor}`}>
      {style.text}
    </div>
  );
}







