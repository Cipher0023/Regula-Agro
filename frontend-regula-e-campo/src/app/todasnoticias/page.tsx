'use client';

import PostSearch from '@/components/postagens/postSearch/PostSearch';
import NoticiaMobile from '@/components/postagens/notíciasmobile/NotíciasMobile';
import { useViewportContext } from '@/contexts/ViewportContext';

export default function AllPostsPage() {
  const { isMobile } = useViewportContext();

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
    {
      imageUrl: "/trator.png",
      title: "Outra notícia importante do setor agrícola",
      description: "Descrição da notícia mais recente...",
      badgeType: "tecnologia",
      views: 180,
      comments: 7,
      daysAgo: 3,
    },
    // Adicione mais posts aqui
  ];

  // Ordena do mais recente para o mais antigo
  const sortedPosts = posts.sort((a, b) => a.daysAgo - b.daysAgo);

  return (
    <div className="flex flex-col gap-y-20 w-full items-center">
      <main className="flex flex-col max-w-[1136px] w-full gap-8 py-10">
        

        {sortedPosts.length === 0 ? (
          <p className="text-gray-500 text-center w-full">
            Nenhuma publicação disponível no momento.
          </p>
        ) : (
          sortedPosts.map((post, index) => (
            <div key={index} className="flex flex-col w-full items-start gap-8">
              {isMobile ? (
                <NoticiaMobile {...post} />
              ) : (
                <PostSearch {...post} />
              )}
              {index < sortedPosts.length - 1 && (
                <div className="stroke-gray-100 border-b border-t border-gray-100 w-full" />
              )}
            </div>
          ))
        )}
      </main>
    </div>
  );
}
