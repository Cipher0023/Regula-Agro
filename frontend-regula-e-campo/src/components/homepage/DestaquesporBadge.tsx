"use client";

import React, { useEffect, useState } from "react";
import Notícia from "../postagens/notícia/Notícia";
import NotíciaSecundária from "../postagens/notíciasecundária/NotíciaSecundária";

interface Noticia {
  id: number;
  imageUrl: string;
  title: string;
  views: number;
  comments: number;
  badgeType: string;
}

interface Props {
  badgeType: string;
}

export default function DestaquesPorBadge({ badgeType }: Props) {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    // Simulando dados vindos do backend (substitua isso depois pela chamada real)
    const todasNoticias: Noticia[] = [
      {
        id: 1,
        imageUrl: "trator.png",
        title: "Notícia 1 sobre culturas",
        views: 225,
        comments: 14,
        badgeType: "culturas",
      },
      {
        id: 2,
        imageUrl: "trator.png",
        title: "Notícia 2 sobre tecnologia",
        views: 100,
        comments: 5,
        badgeType: "culturas",
      },
      {
        id: 3,
        imageUrl: "trator.png",
        title: "Notícia 3 sobre culturas",
        views: 350,
        comments: 22,
        badgeType: "culturas",
      },
    ];

    const filtradas = todasNoticias.filter(n => n.badgeType === badgeType);
    setNoticias(filtradas);
  }, [badgeType]);

  if (noticias.length === 0) {
    return <p className="text-center py-10 text-gray-400">Nenhuma notícia encontrada para "{badgeType}"</p>;
  }

  return (
    <div className="flex flex-row w-full max-h-[548px] space-x-4">
      <div className="flex-1">
        <Notícia {...noticias[0]} />
      </div>

      <div className="flex-1 space-y-4 flex flex-col pb-10">
        {noticias.slice(1).map((noticia) => (
          <NotíciaSecundária key={noticia.id} {...noticia} />
        ))}
      </div>
    </div>
  );
}
