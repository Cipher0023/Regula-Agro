'use client';

import PostSearch from '@/components/postagens/postSearch/PostSearch';
import { useEffect, useState } from 'react';

export default function ReactedPostsPage() {
  const [reactedTitles, setReactedTitles] = useState<string[]>([]);

  // Simulando a busca de reações do usuário (pode vir de localStorage, backend etc)
  useEffect(() => {
    // Exemplo: carregar do localStorage
    const stored = localStorage.getItem('reactedTitles');
    if (stored) {
      setReactedTitles(JSON.parse(stored));
    }
  }, []);

  // Lista completa de posts
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
      imageUrl: "/fazenda.png",
      title: "Novas tecnologias impulsionam produção sustentável no cerrado",
      description:
        "Produtores do cerrado testam novas soluções tecnológicas para lidar com desafios climáticos e aumentar a produtividade...",
      badgeType: "meioambiente",
      views: 312,
      comments: 9,
      daysAgo: 3,
    },
  ];

  const filteredPosts = posts.filter((post) =>
    reactedTitles.includes(post.title)
  );

  return (
    <div className="flex flex-col gap-y-20 w-full items-center">
      <main className="flex flex-col max-w-[1136px] w-full gap-8 py-10">
        <h1 className="text-2xl font-bold text-neutral-700 mb-6">
          Notícias curtidas
        </h1>

        {filteredPosts.length === 0 ? (
          <p className="text-gray-500 text-center w-full">
            Você ainda não reagiu a nenhuma notícia.
          </p>
        ) : (
          filteredPosts.map((post, index) => (
            <div key={index} className="flex flex-col w-full items-start gap-8">
              <PostSearch {...post} />
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
