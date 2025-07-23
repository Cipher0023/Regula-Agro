"use client";

import React, { useEffect, useState } from "react";
import NotíciaMobile from "../postagens/notíciasmobile/NotíciasMobile";

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

export default function DestaquesMobilePorBadge({ badgeType }: Props) {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    // 🔄 Mock temporário – substitua pelo fetch real futuramente
    const todasNoticias: Noticia[] = [
      {
        id: 1,
        imageUrl: "trator.png",
        title: "Notícia 1 sobre culturas",
        views: 25,
        comments: 14,
        badgeType: "culturas",
      },
      {
        id: 2,
        imageUrl: "trator.png",
        title: "Notícia 2 sobre tecnologia",
        views: 10,
        comments: 2,
        badgeType: "tecnologia",
      },
      {
        id: 3,
        imageUrl: "trator.png",
        title: "Notícia 3 sobre culturas",
        views: 40,
        comments: 18,
        badgeType: "culturas",
      },
    ];

    const filtradas = todasNoticias.filter(n => n.badgeType === badgeType);
    setNoticias(filtradas);
  }, [badgeType]);

  if (noticias.length === 0) {
    return (
      <p className="text-center py-10 text-gray-400">
        Nenhuma notícia encontrada para "{badgeType}"
      </p>
    );
  }

  return (
    <div className="flex flex-row w-full">
      <div className="space-y-6 w-full">
        {noticias.map((noticia, index) => (
          <React.Fragment key={noticia.id}>
            <NotíciaMobile {...noticia} />
            {index < noticias.length - 1 && (
              <div className="stroke-gray-100 border-b border-t border-gray-100 w-full"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
