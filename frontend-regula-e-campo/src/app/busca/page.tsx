'use client';

import PostSearch from '@/components/postagens/postSearch/PostSearch';
import NoticiaMobile from '@/components/postagens/notíciasmobile/NotíciasMobile';
import { useSearchParams } from 'next/navigation';
import { useViewportContext } from '@/contexts/ViewportContext'; // aqui importamos o contexto

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('termo')?.toLowerCase() || '';
  const { isMobile } = useViewportContext(); // usamos o contexto

  const posts = [
    {
      imageUrl: "/trator.png",
      title: "Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse",
      description:
        "A Frente Parlamentar da Agropecuária (FPA) está apoiando um novo projeto na Câmara dos Deputados para cancelar o Decreto 12.373/2025...",
      badgeType: "culturas",
      views: 225,
      comments: 14,
      daysAgo: 1,
    },
  ];

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query) ||
    post.description.toLowerCase().includes(query)
  );

  return (
    <div className="flex flex-col gap-y-20 w-full items-center">
      <main className="flex flex-col max-w-[1136px] w-full gap-8 py-10">
        <h1 className="text-2xl font-bold mb-6">
          Resultados para: <span className="text-green-700">{query}</span>
        </h1>

        {filteredPosts.length === 0 ? (
          <p className="text-gray-500 text-center w-full">
            Nenhum resultado encontrado para "{query}"
          </p>
        ) : (
          filteredPosts.map((post, index) => (
            <div key={index} className="flex flex-col w-full items-start gap-8">
              {isMobile ? (
                <NoticiaMobile {...post} />
              ) : (
                <PostSearch {...post} />
              )}
              {index < filteredPosts.length - 1 && (
                <div className="stroke-gray-100 border-b border-t border-gray-100 w-full" />
              )}
            </div>
          ))
        )}
      </main>
    </div>
  );
}
