import React from "react";
import NotíciaNovidade from "@/components/postagens/notíciaNovidade/NotíciaNovidade";

interface NovidadesProps {
  badgeType: "culturas" | "defensivos" | "bioinsumos" | "fertilizantes" | "biodiversidade" | "pesquisa";
}

// Lista de todas as notícias disponíveis
const todasAsNoticias = [
  {
    imageUrl: "trator.png",
    title: "Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse",
    views: 225,
    comments: 14,
    badgeType: "culturas",
    daysAgo: 0,
  },
  {
    imageUrl: "trator.png",
    title: "Startup lança bioinsumo promissor no cerrado",
    views: 140,
    comments: 7,
    badgeType: "culturas",
    daysAgo: 2,
  },
  {
    imageUrl: "trator.png",
    title: "Nova técnica de fertilização chega ao campo",
    views: 320,
    comments: 19,
    badgeType: "fertilizantes",
    daysAgo: 1,
  },
  {
    imageUrl: "trator.png",
    title: "Uso de drones na lavoura aumenta 50% no último ano",
    views: 98,
    comments: 4,
    badgeType: "culturas",
    daysAgo: 3,
  },
];

export default function NovidadesPorBadge({ badgeType }: NovidadesProps) {
  const noticiasFiltradas = todasAsNoticias.filter(
    (noticia) => noticia.badgeType === badgeType
  );

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-neutral-700">Novidades</h2>

      <div className="flex flex-row w-full space-x-4">
        {noticiasFiltradas.length > 0 ? (
          noticiasFiltradas.map((noticia, index) => (
            <div className="flex-1 flex" key={index}>
              <NotíciaNovidade {...noticia} />
            </div>
          ))
        ) : (
          <p className="text-gray-500">Nenhuma novidade disponível.</p>
        )}
      </div>
    </section>
  );
}
