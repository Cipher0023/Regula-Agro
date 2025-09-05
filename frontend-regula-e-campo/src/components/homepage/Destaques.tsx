"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Notícia from "../postagens/notícia/Notícia";
import NotíciaSecundária from "../postagens/notíciasecundária/NotíciaSecundária";
import useNwsStore from "@/stores/useNwsStore";
import usePhtStore from "@/stores/usePhtStore";

function Destaques() {
  const news = useNwsStore((s) => s.news);
  const loading = useNwsStore((s) => s.loading);
  const fetchNews = useNwsStore((s) => s.fetchNews);

  const photos = usePhtStore((s) => s.photos);
  const pLoading = usePhtStore((s) => s.loading);
  const fetchPhotos = usePhtStore((s) => s.fetchPhotos);

  // Garante dados na store caso o AppHydrator não tenha carregado ainda
  useEffect(() => {
    if (!news.length && !loading) {
      fetchNews();
    }
  }, [news.length, loading, fetchNews]);

  // Garante fotos carregadas (AppHydrator já tenta, mas garantimos aqui também)
  useEffect(() => {
    if (!photos.length && !pLoading) {
      fetchPhotos();
    }
  }, [photos.length, pLoading, fetchPhotos]);

  if (loading || !news.length) {
    return <div>Carregando...</div>;
  }

  const photoUrlFromId = (maybeIdOrUrl: string | undefined) => {
    if (!maybeIdOrUrl) return "trator.png";
    if (/^https?:\/\//.test(maybeIdOrUrl)) return maybeIdOrUrl;
    const p = photos.find((x) => x.photo_id === maybeIdOrUrl);
    return p?.source || "trator.png";
  };

  const getBadgeType = (
    n: any
  ):
    | "culturas"
    | "defensivos"
    | "bioinsumos"
    | "fertilizantes"
    | "biodiversidade"
    | "pesquisa" => {
    const tag = n?.tag?.toLowerCase?.();
    switch (tag) {
      case "defensivos":
        return "defensivos";
      case "bioinsumos":
        return "bioinsumos";
      case "fertilizantes":
        return "fertilizantes";
      case "biodiversidade":
        return "biodiversidade";
      case "pesquisa":
        return "pesquisa";
      case "culturas":
      default:
        return "culturas";
    }
  };

  const [first, ...rest] = news;

  return (
    <div className="flex flex-row space-x-4 w-full max-h-[548px]">
      <div className="flex-1">
        <div className="h-[380px] md:h-[520px]">
          <Link
            href={`/noticia/${first.news_id}`}
            className="block h-full cursor-pointer"
          >
            <Notícia
              imageUrl={photoUrlFromId((first as any).main_image)}
              title={first.title}
              views={0}
              comments={0}
              badgeType={getBadgeType(first)}
              daysAgo={0}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col flex-1 space-y-4 pb-10">
        {rest.slice(0, 2).map((item: any) => (
          <div key={item.news_id} className="h-[160px] md:h-[200px]">
            <Link
              href={`/noticia/${item.news_id}`}
              className="block h-full cursor-pointer"
            >
              <NotíciaSecundária
                imageUrl={photoUrlFromId(item.main_image)}
                title={item.title}
                views={0}
                comments={0}
                badgeType={getBadgeType(item)}
                daysAgo={0}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destaques;
