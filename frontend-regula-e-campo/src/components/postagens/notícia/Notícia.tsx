import React from "react";
import Badge from "@/components/badge/Badge";
import Commentbutton from "@/components/buttons/smButton/Commentbutton";
import Viewbutton from "@/components/buttons/smButton/Viewbutton";
import ReactionButton from "@/components/buttons/smButton/Reactionbutton";

interface NotíciaProps {
  imageUrl: string;
  title: string;
  views: number;
  comments: number;
  badgeType:
    | "culturas"
    | "defensivos"
    | "bioinsumos"
    | "fertilizantes"
    | "biodiversidade"
    | "pesquisa";
  daysAgo: number; // Novo campo
}

function Notícia({
  imageUrl,
  title,
  views,
  comments,
  badgeType,
  daysAgo,
}: NotíciaProps) {
  return (
    <div className="flex flex-col space-y-3 rounded-2x1 h-full overflow-hidden">
      <div className="relative border border-gray-200 rounded-2xl h-full overflow-hidden">
        {/* Badge posicionado no canto superior esquerdo da imagem */}
        <div className="top-2 left-2 z-10 absolute">
          <Badge type={badgeType} />
        </div>

        <img
          src={imageUrl}
          alt="imagem do post"
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Gradiente + texto por cima */}
        <div className="bottom-0 z-10 absolute w-full text-white text-left">
          <div className="bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
            <div className="font-bold text-[24px]">{title}</div>
          </div>
        </div>
      </div>

      {/* Indicadores + tempo de publicação */}
      <div className="flex items-center gap-2">
        <Viewbutton text={views.toString()} />
        <ReactionButton counts={undefined} />
        <Commentbutton text={comments.toString()} />
        <span className="mr-auto text-gray-400 text-sm whitespace-nowrap">
          {daysAgo === 0
            ? "Hoje"
            : `${daysAgo} dia${daysAgo > 1 ? "s" : ""} atrás`}
        </span>
      </div>
    </div>
  );
}

export default Notícia;
